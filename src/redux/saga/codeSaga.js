import { all, call, debounce, put } from 'redux-saga/effects';
import { updateCSS, updateHTML, updateJS } from '../action';
import actionTypes from '../actionTypes';


function* updateHTMLWorker({ payload }) {
    yield put(updateHTML(payload));
};

function* updateCSSWorker({ payload }) {
    yield put(updateCSS(payload));
};

function* updateJSWorker({ payload }) {
    yield put(updateJS(payload));
};

function* onUpdateHTML() {
    yield debounce(1000, actionTypes.ON_UPDATE_HTML, updateHTMLWorker);
};

function* onUpdateCSS() {
    yield debounce(1000, actionTypes.ON_UPDATE_CSS, updateCSSWorker);
};

function* onUpdateJS() {
    yield debounce(1000, actionTypes.ON_UPDATE_JS, updateJSWorker);
};

export default function* codeSaga() {
    yield all([call(onUpdateHTML), call(onUpdateCSS), call(onUpdateJS)]);
}