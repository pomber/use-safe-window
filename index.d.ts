declare function useSafeWindow<T>(fn: (window: Window) => T): T | undefined;
declare function useSafeWindow<T, U>(fn: (window: Window) => T, def: U): T | U;
export { useSafeWindow };
