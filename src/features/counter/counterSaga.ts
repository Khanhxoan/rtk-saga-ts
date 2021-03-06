import { PayloadAction } from "@reduxjs/toolkit";
import { take, takeEvery } from "redux-saga/effects";
import { increment } from "./counterSlice";

export function* log(action: PayloadAction) {
    console.log('Log', action)
}

export default function* counterSaga() {
 console.log('counter saga');
 
 yield takeEvery('*',log ) // lắng nghe mọi action
 yield takeEvery('counter/increment', log) // lắng  nghe 1 action
 yield takeEvery(increment().type, log) // lắng nghe type action
}