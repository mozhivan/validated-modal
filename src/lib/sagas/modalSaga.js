import {
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  INIT_MODAL,
  saveModalValues
} from '@app/lib/actions/modalActions.js';
import {
  getModalValues
} from '@app/lib/helpers/storage.js';

function* initModal() {

  yield put(saveModalValues(getModalValues()));
}

export default function* watchModal() {
  yield* [
    takeLatest(INIT_MODAL, initModal),
  ];
}
