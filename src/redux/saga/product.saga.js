import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchData } from '../../service/axiosService';

function* getCategoreis() {
  try {
    const response = yield call(fetchData, '/categories');
    yield put({ type: 'GET_CATEGORIES_SUCCESS', categories: response?.data });
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_CATEGORIES_FAILURE', error: error });
  }
}

function* getProducts() {
  try {
    const response = yield call(fetchData, '/products');

    yield put({ type: 'GET_PRODUCTS_SUCCESS', products: response?.data });
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_PRODUCTS_FAILURE', error: error });
  }
}

function* getProduct(data) {
  try {
    const response = yield call(fetchData, `/products/${data?.payload?.productId}`);

    yield put({ type: 'GET_PRODUCT_SUCCESS', product: response?.data });
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_PRODUCT_FAILURE', error: error });
  }
}

export function* categoriesSaga() {
  yield takeLatest('REQUEST_GET_CATEGORIES', getCategoreis);
}

export function* productsSaga() {
  yield takeLatest('REQUEST_GET_PRODUCTS', getProducts);
}

export function* productSaga() {
  yield takeLatest('REQUEST_GET_PRODUCT', getProduct);
}
