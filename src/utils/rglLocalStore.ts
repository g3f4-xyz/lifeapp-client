import { Layouts } from 'react-grid-layout';
import { LOCAL_STORAGE_LAYOUT_KEY } from '../constans';

const ITEM_KEY = 'rgl-8';

export const getFromLS = (key: LOCAL_STORAGE_LAYOUT_KEY): Layouts => {
  try {
    const ls = JSON.parse(window.localStorage.getItem(ITEM_KEY) || '');

    return ls[key];
  } catch (e) {
    throw e;
  }
};

export const saveToLS = (key: LOCAL_STORAGE_LAYOUT_KEY, value: Layouts): void => {
  try {
    window.localStorage.setItem(
      ITEM_KEY,
      JSON.stringify({
        [key]: value,
      }),
    );
  } catch (e) {
    throw e;
  }
};
