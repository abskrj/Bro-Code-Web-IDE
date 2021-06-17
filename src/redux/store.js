import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { hydrater, persistor } from './middleware/persistor';
import reducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, persistor];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
));

hydrater(store);

sagaMiddleware.run(rootSaga);

export default store;

