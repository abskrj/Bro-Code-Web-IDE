import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
));


sagaMiddleware.run(rootSaga);

export default store;

