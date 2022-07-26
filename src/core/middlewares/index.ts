import { BootFileParams } from '@quasar/app-vite';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

interface RouterGuard {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  next: NavigationGuardNext;
}

interface CustomProperties {
  [key: string]: any;
}

interface MiddlewareHandler {
  (params: BootFileParams<any> & RouterGuard, properties: CustomProperties):
    | boolean
    | Promise<boolean>;
}

export interface Middleware {
  name: string;
  handler: MiddlewareHandler;
}

type HandlerParameters = RouterGuard;
type MiddlewareRecord = (string | Middleware)[];

/**
 *
 * @param name Уникальное название middleware
 * @param fn Функция обработчика
 * @param properties Необязательные свойства
 * @example ```ts
 import { defineMiddleware } from '@core/middlewares';
 export default defineMiddleware('authMiddleware', (context) => true)
 * ```
 */
export function defineMiddleware(name: string, fn: MiddlewareHandler): Middleware {
  return {
    name,
    handler: fn,
  };
}

/**
 * @description Создание глобального обработчика для обработки созданных middlewares
 * @param middlewares Список всех middlewares
 * @param properties Свойства, которые могут быть доступны в middlewares
 * @returns Асинхронная функция, которая возвращает Promise<boolean>, если значение true это означает, что `next()` обрабатывается middlewares, если false, это означает, что `next()` не обрабатывается middlewares
 */
function createMiddlewareHandler(
  context: BootFileParams<any>,
  middlewares: Middleware[],
  properties?: CustomProperties,
) {
  return async (routerContext: HandlerParameters) => {
    const allContext = {
      ...context,
      ...routerContext,
    };

    const routeMiddlewares = routerContext.to.meta.middlewares as MiddlewareRecord;

    if (!routeMiddlewares) {
      return false;
    }

    const middlewareArray: (Middleware | null | undefined)[] = routeMiddlewares
      .map((middleware) => {
        if (typeof middleware === 'string') return middlewares.find((m) => m.name === middleware);

        if (
          typeof middleware === 'object' &&
          middleware.name &&
          typeof middleware.handler === 'function'
        )
          return middleware;

        return null;
      })
      .filter(Boolean);

    for (let index = 0; index < middlewareArray.length; index++) {
      const middleware = middlewareArray[index];

      if (!middleware) continue;

      const handler = middleware.handler(allContext, properties || {});
      if (typeof handler === 'boolean') {
        if (!handler) return true;
        continue;
      } else {
        const handlerValue = await handler;
        if (!handlerValue) return true;
        continue;
      }
    }
    return false;
  };
}

/**
 * @description Обработчик, который автоматически выполняет {@link createMiddlewareHandler}
 * @see {@link createMiddlewareHandler}
 * @param context Контекст
 * @param middlewares Массив middleware
 * @param properties Свойства, которые могут быть доступны в middlewares
 * @returns функция, которая будет обрабатываться в `router.beforeEach`
 */
export function middlewareHandler(
  context: BootFileParams<any>,
  middlewares: Middleware[],
  properties?: CustomProperties,
) {
  return async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    const middlewareHandler = createMiddlewareHandler(context, middlewares, properties);
    const isHandled = await middlewareHandler({ to, from, next });
    if (!isHandled) {
      next();
    }
  };
}
