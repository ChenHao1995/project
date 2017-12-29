(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['axios', 'zepto'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('axios'), require('zepto'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.axios, global.zepto);
    global.home = mod.exports;
  }
})(this, function (_axios, _zepto) {
  'use strict';

  var _axios2 = _interopRequireDefault(_axios);

  var _zepto2 = _interopRequireDefault(_zepto);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log(_axios2.default.defaults);
});