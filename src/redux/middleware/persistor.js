import localForage from 'localforage';
import actionTypes from '../actionTypes';

export const persistor = store => next => action => {
    const result = next(action);
    localForage.setItem('broState', store.getState());
    return result
};

export const hydrater = (store) => {
    localForage.getItem('broState', function (err, cachedState) {
        if (!err) {
            store.dispatch({ type: actionTypes.HYDRATE, payload: cachedState });
        }
    });
};