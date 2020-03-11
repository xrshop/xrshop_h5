/* eslint-disable no-param-reassign */
import { Route } from 'vue-router';
import { VIEW_SCROLL_SELECTOR } from '@/config/constant';

function getLastElBySelector(selector: string) {
  const saveScrollEls = document.querySelectorAll(selector);
  const saveScrollElArray = Array.from(saveScrollEls);
  if (saveScrollElArray) {
    return saveScrollElArray[saveScrollElArray.length - 1];
  }
  return undefined;
}

export function loadViewScrollPosition(to: Route) {
  if (to.meta.viewScrollSavedPosition) {
    const lastSaveScrollEl = getLastElBySelector(VIEW_SCROLL_SELECTOR);
    if (lastSaveScrollEl) {
      const { x, y } = to.meta.viewScrollSavedPosition;
      lastSaveScrollEl.scrollTo(x, y);
    }
    return true;
  }
  return false;
}

export function saveViewScrollPosition(from: Route) {
  const lastSaveScrollEl = getLastElBySelector(VIEW_SCROLL_SELECTOR);
  if (lastSaveScrollEl) {
    from.meta.viewScrollSavedPosition = {
      x: lastSaveScrollEl.scrollLeft,
      y: lastSaveScrollEl.scrollTop,
    };
  }
}
