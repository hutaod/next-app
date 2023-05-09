import { AppStore, getOrInitStore } from "."

export function useStore() {
  const store = getOrInitStore();
  return store;
}

// type WrapperdFunction<E> = (extra?: E) => Function;

// export function withStore(fn: any) {
//   function enhanceFn() {
//     const store = getOrInitStore();
//     return fn({ store })();
//   }
//   return enhanceFn;
// }

// withStore(({ store }) => () => {
//   console.log(store)
// })