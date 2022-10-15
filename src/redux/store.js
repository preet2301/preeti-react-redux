import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer/index.reducer';
import rootSaga from './saga/index.saga';

const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
