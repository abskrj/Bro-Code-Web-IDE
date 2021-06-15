import { all, fork } from "@redux-saga/core/effects";
import codeSaga from "./saga/codeSaga";

export default function* rootSaga() {
    yield all([fork(codeSaga)]);    
}