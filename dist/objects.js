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
  exports.merge = merge;
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

  function merge(f, a, b) {
    var unique = [];
    return Object.keys(a).concat(Object.keys(b)).reduce(function (acc, k) {
      if (unique.indexOf(k) == -1) {
        unique.push(k);
        // this is a fusion of unique and the merge algorithm.
        if (a[k] && b[k]) {
          acc[k] = f(k, a[k], b[k]);
        } else {
          if (a[k]) acc[k] = a[k];else acc[k] = b[k];
        }
      }
      return acc;
    }, {});
  }
});
