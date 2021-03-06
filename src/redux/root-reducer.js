import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import chatReducer from './chat/chat.reducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist:['chat']
// }

const rootReducer = combineReducers({
    chat: chatReducer
})

// export default persistReducer(persistConfig,rootReducer)
export default rootReducer;
