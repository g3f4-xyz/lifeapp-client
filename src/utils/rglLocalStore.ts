export const getFromLS = (key: any): any => {
  let ls = {};
  // @ts-ignore
  if (global.localStorage) {
    try {
      // @ts-ignore
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  // @ts-ignore
  return ls[key];
};

export const saveToLS = (key: any, value: any): any => {
  // @ts-ignore
  if (global.localStorage) {
    // @ts-ignore
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
};
