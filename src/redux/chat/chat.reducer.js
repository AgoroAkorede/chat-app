import chatActionTypes from './chat.types'
const INITIAL_STATE = {
    message: '',
    error: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case  chatActionTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
                error:null
            }
            case  chatActionTypes.CLEAR_MESSAGE:
                return {
                    ...state,
                    message: null,
                    error:null
                }
            default:
            return state
    }
}
export default chatReducer;