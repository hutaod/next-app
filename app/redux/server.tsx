import { ClientProvider } from "./client";
import { AppStore, getOrInitStore } from "./store";

export function ServerProvider({ children }: { children: React.ReactNode }) {
  console.log("ServerProvider");
  return (
    <ClientProvider value={useStore().getState()}>
      {children}
    </ClientProvider>
  )
}

type WrapperdFunction<S, F> = (extra: { store: S }) => F;

export function useStore() {
  console.log("useStore");
  const store = getOrInitStore();
  return store;
}

export function withStore<F extends (...args: any[]) => ReturnType<F>>(fn: WrapperdFunction<AppStore, F>) {
  return (...args: Parameters<F>) => {
    const store = getOrInitStore() as AppStore;
    const result = fn({ store })(...args);
    return result;
  };
}