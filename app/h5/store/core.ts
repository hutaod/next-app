import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import {
  configureStore,
  combineReducers,
  createSlice,
  Reducer,
  ReducersMapObject,
  AnyAction,
  SliceCaseReducers,
  CreateSliceOptions,
} from "@reduxjs/toolkit";

let globalReducerMap: ReducersMapObject<any, AnyAction> = {};
const modulesReducerMap: Record<string, Reducer<any, AnyAction>> = {};

let store: ToolkitStore;

export const createStore: typeof configureStore = function createStore(...params) {
  const [options, ...other] = params;
  if (typeof options.reducer !== "function") {
    globalReducerMap = {
      ...globalReducerMap,
      ...options.reducer,
    };
  }
  const reslut = configureStore(
    {
      ...options,
      reducer:
        typeof options.reducer === "function"
          ? options.reducer
          : {
              ...globalReducerMap,
              ...modulesReducerMap,
              ...options.reducer,
            },
    },
    ...other
  );
  store = reslut;
  return reslut;
};

export function getStore() {
  return store;
}

/**
 * 动态新增reducer
 */
function replaceReducer(namespace: string, reducer: Reducer<any, AnyAction>) {
  if (!namespace || !reducer) {
    return;
  }
  // 加入map
  modulesReducerMap[namespace] = reducer;
  if (!store) {
    return;
  }
  // 加入reducer
  const newReducer = combineReducers({
    ...modulesReducerMap,
    ...globalReducerMap,
  });
  store.replaceReducer(newReducer);
}

/**
 * 自动创建slice并加入
 */
export const autoCreateSliceToStore = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => {
  const slice = createSlice(options);
  replaceReducer(slice.name, slice.reducer);
  return slice;
};
