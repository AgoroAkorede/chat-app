import chatActionTypes from './chat.types'
// import Message from '../../component/message/message.component'

export const createChat = ( message ) => ({
    type: chatActionTypes.SET_MESSAGE,
    payload: message
});