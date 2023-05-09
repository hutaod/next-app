import { getOrInitStore } from "./index";

import { ClientProvider } from "./provider";

export function ServerProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider value={getOrInitStore().getState()}>
      {children}
    </ClientProvider>
  )
}