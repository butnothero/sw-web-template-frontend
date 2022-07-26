import { ToastOptions } from './types';

export const SWIPE_ACTIVE_DIFF = 200;
export const TOAST_GAP = 12;
export const DEFAULT_OPTIONS: ToastOptions = {
  type: 'default',
  timeout: 4000,
  showCloseButton: true,
  position: 'top-center',
  transition: 'bounce',
  hideProgressBar: false,
  swipeClose: true,
};
