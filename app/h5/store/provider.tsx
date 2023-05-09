"use client";
import { Provider } from "react-redux";
import { getOrInitStore } from "./index"

export function ClientProvider({ children, value }: { children: React.ReactNode, value: any }) {
  return (
    <Provider store={getOrInitStore(value)}>
      {children}
    </Provider>
  )
}