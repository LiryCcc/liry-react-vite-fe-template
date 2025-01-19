import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    // 可以在这里添加你的其他 saga
  ]);
}

export default rootSaga;
