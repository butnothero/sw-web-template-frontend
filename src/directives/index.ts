import { App } from 'vue';
import { vueEffectRipple } from '@/directives/ripple';
import { vueClickOutside } from '@/directives/clickOutside';
import { vueDragScroll } from '@/directives/dragscroll';
import { vueTouchEvents } from '@/directives/touch';
import { vueLazy } from '@/directives/lazy';

export const installVueDirectives = (app: App) => {
  vueEffectRipple(app);
  vueClickOutside(app);
  vueDragScroll(app);
  vueTouchEvents(app);
  vueLazy(app);
};
