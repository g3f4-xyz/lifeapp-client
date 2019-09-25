import { Layouts } from 'react-grid-layout';
import { LOCAL_STORAGE_LAYOUT_KEY } from '../constans';

const ITEM_KEY = 'rgl-8';

export const getFromLS = (key: LOCAL_STORAGE_LAYOUT_KEY): Layouts | null => {
  const layouts = window.localStorage.getItem(ITEM_KEY);

  if (layouts) {
    const ls = JSON.parse(window.localStorage.getItem(ITEM_KEY) || '');

    return ls[key];
  }

  return null;
};

export const saveToLS = (key: LOCAL_STORAGE_LAYOUT_KEY, value: Layouts): void => {
  window.localStorage.setItem(
    ITEM_KEY,
    JSON.stringify({
      [key]: value,
    }),
  );
};
