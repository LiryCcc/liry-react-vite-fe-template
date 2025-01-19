// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // 引入你的根 reducer
import rootSaga from './sagas'; // 引入你的根 saga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga); // 启动根 saga

export default store;
