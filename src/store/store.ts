import {configureStore} from "@reduxjs/toolkit"
import accountReducer from "./account/accountSlice";
import createSagaMiddleware, {SagaMiddleware} from "redux-saga";
import rootSaga from "./rootSaga";

let t = 0;

const sagaMiddleware: SagaMiddleware = createSagaMiddleware({
  onError(error) {
    clearTimeout(t);

    t = window.setTimeout(() => {
      // errorInfo - stack of saga
      console.error(error);
      console.warn('RESTART SAGA');
      sagaMiddleware.run(rootSaga);
    }, 1000);
  },
});

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) => ([...getDefaultMiddleware({thunk: false}), sagaMiddleware])
})

sagaMiddleware.run(rootSaga);

