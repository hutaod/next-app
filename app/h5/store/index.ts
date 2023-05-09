import { createStore } from './core'
import counterReducer from './features/counter/counterSlice'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

let store: ToolkitStore;

function makeStore() {
  return createStore({
    reducer: {
      counter: counterReducer
    },
  });
}

export const HYDRATE = "__NEXT_REDUX_WRAPPER_HYDRATE__";
let isInitState = false;

export function getOrInitStore(initState?: any) {
  if (!store) {
    store = makeStore();
  }
  if (initState) {
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

