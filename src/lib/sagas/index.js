import { all } from 'redux-saga/effects';

import watchModal from './modalSaga.js';

export default function* rootSaga() {
  yield all([
    watchModal(),
  ]);
}
