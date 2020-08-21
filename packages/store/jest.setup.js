require('@testing-library/jest-dom/extend-expect');
require('jest-axe/extend-expect');
global.fetch = require('node-fetch');

const localStorageMock = (function () {
  const store = {};
  return {
    getItem: function (key) {
      return store[key] ? store[key] : null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
