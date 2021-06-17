import { all, call, debounce, put } from 'redux-saga/effects';
import mergeAllCode from '../../utils/htmlParser';
import showOutput from '../../utils/showOutput';
import { updateCode } from '../action';
import actionTypes from '../actionTypes';
import store from '../store';



function* updateCodeWorker({ payload }) {
    yield put(updateCode(payload.lang, payload.code));
    const state = store.getState();
    showOutput(mergeAllCode(state.code?.html, state.code?.css, state.code?.js));
};

function* onUpdateCode() {
    yield debounce(1000, actionTypes.ON_UPDATE_CODE, updateCodeWorker);
};

export default function* codeSaga() {
    yield all([call(onUpdateCode)]);
}