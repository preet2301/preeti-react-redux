import { all } from 'redux-saga/effects';
import { categoriesSaga, productSaga, productsSaga } from './product.saga';

export default function* rootSaga() {
  yield all([
    productsSaga(),
    productSaga(),
    categoriesSaga()
  ])
}
