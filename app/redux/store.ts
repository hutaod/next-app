import { createStore } from './core'
import counterReducer from './features/counter/counterSlice'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

let store: ToolkitStore;

function makeStore() {
  console.log(1111, "makeStore")
  return createStore({
    reducer: {
      counter: counterReducer
    },
  });
}

export const HYDRATE = "__NEXT_REDUX_WRAPPER_HYDRATE__";
let isInitState = false;

const isBrowser = typeof window === "object" && typeof window.document === "object"

export function getOrInitStore(initState?: any) {
  // console.log("getOrInitStore", initState)
  if (!store) {
    store = makeStore();
  }
  if (isBrowser && initState && !isInitState) {
    console.log("getOrInitStore2", initState)
    isInitState = true;
    store.dispatch({
      type: HYDRATE,
      payload: initState
    })
  }
  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

