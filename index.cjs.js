"use strict";

exports.useSafeWindow = function useSafeWindow(fn, def) {
  return typeof window !== "undefined" ? fn(window) : def;
};
