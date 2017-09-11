(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.update = update;
  exports.updateWithKey = updateWithKey;
  function update(f, k, o) {
    if (!o[k]) return o;
    o[k] = f(o[k]);
    return o;
  }

  function updateWithKey(f, k, o) {
    if (!o[k]) return o;
    o[k] = f(k, o[k]);
    return o;
  }
});