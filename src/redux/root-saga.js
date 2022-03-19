import { all, call } from 'redux-saga/effects';
import {chatSagas} from './chat/chat.saga'

export default function* rootSaga() {
    yield all([
        call(chatSagas)
    ])
}