import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;