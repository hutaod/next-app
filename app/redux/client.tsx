"use client";
import { createContext, useState, useMemo, useContext } from "react";
import { getOrInitStore } from "./store";

export const context = createContext<any>(null);

export function ClientProvider({ children, value }: { children: React.ReactNode, value: any }) {
  const [state, setState] = useState(value);
  useMemo(() => {
    const store = getOrInitStore(value);
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])
  return (
    <context.Provider value={state}>{children}</context.Provider>
  )
}

export const useSelector = (selector: (state: any) => any) => {
  const state = useContext(context);
  return selector(state)
}

export const useDispatch = () => {
  const store = getOrInitStore();
  return store.dispatch;
}
