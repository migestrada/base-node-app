import decamelize from 'decamelize-keys-deep';
import { call, put } from 'redux-saga/effects';
import { showSnackBar } from '../modules/app';

export default function* controlledCall(toYield, path, body = undefined, successAction, failAction,  noApi = false) {
  const result = yield body ? call(toYield, path, decamelize(body), noApi) : call(toYield, path, noApi)
  const data = yield result.json()

  if (result.ok) {
    yield put(successAction(data))
  } else {
    yield put(failAction(data))
    if (data.error && typeof data.error === 'string') {
      yield put(showSnackBar(data.error, 'error'))
    }
  }
}