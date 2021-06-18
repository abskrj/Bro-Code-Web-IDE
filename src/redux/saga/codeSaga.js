import { all, call, debounce, put } from 'redux-saga/effects';
import { updateCode } from '../action';
import actionTypes from '../actionTypes';

function* updateCodeWorker({ payload }) {
    yield put(updateCode(payload.lang, payload.code));
};

function* onUpdateCode() {
    yield debounce(1000, actionTypes.ON_UPDATE_CODE, updateCodeWorker);
};

export default function* codeSaga() {
    yield all([call(onUpdateCode)]);
}