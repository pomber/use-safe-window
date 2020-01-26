function useSafeWindow<T>(fn: (window: Window) => T): T | undefined;
function useSafeWindow<T, U>(fn: (window: Window) => T, def: U): T | U;
function useSafeWindow<T, U>(
  fn: (window: Window) => T,
  def?: U
): T | U | undefined {
  return typeof window !== "undefined" ? fn(window) : def;
}

export default useSafeWindow;
