import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

export const cookieStorage = {
  getItem: key => Cookies.get(key),
  // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  setItem: (key, value) => Cookies.set(key, value, { expires: 30 }),
  removeItem: key => Cookies.remove(key),
};

export const persistedStateConfig = {
  key: '_vuex',
  storage: cookieStorage,
};

export default createPersistedState(persistedStateConfig);
