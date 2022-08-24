export const getRouteKey = (route): string => {
  try {
    const metaKey = route.meta?.pageKey;

    if (metaKey) {
      const reg = /:[^:]+(?:[^:]+)*/g;
      const regRes = metaKey.match(reg);

      let result = metaKey;

      if (regRes) {
        regRes
          .join()
          .split(':')
          .forEach((routeParam: string) => {
            if (routeParam && route.params[routeParam]) {
              result += String(route.params[routeParam]);
            }
          });
      }

      return result;
    } else {
      return route.fullPath;
    }
  } catch (e) {
    console.error(e);
    return route?.fullPath || '';
  }
};
