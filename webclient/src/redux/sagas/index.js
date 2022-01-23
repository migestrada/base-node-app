import { takeEvery, fork, all } from 'redux-saga/effects';
import tasksSaga from './tasks';

export default function* rootSaga() {
  yield all([
    fork(tasksSaga)
  ])
}