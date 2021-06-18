import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './rootSaga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];

const persistConfig = {
    key: 'broEditor',
    storage,
}

const composeEnhancers = process.env.NODE_ENV === "development" ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(...middleware)
));


const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const combined = { store, persistor }
export default combined;