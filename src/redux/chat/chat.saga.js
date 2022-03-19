import { all, call, put, takeLatest } from 'redux-saga/effects';

import chatActionTypes from '../chat/chat.types'

export function* chatCreate() {
    yield (chatActionTypes.SET_MESSAGE)
}

export function* chatSagas() {
    yield all([call(chatCreate)])
}