function useSafeWindow(fn, def) {
  return typeof window !== "undefined" ? fn(window) : def;
}

export { useSafeWindow };
