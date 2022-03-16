import React,{useState} from 'react';
import SearchBox from '../search-box/search-box.component'
import CircleButton from '../circlebutton/circle-button'

import CreateChat from '../create-chat/create-chat.component'

import FormInput from '../../component/form-input/form-input.component'
const Chat = () => {
    const [chat,setChat]=useState("")

    const handleChange = event => {
        setChat({ [ event.target.name ]: event.target.value })
        console.log('working');
    }

    const sendMessage = () => {
     <CreateChat />
    }

    return (
        <div>
            <h1>{ }</h1>
           <FormInput placeholder="Start A Conversation" onChange={handleChange} />
           <CircleButton onClick={sendMessage(chat)}>></CircleButton>
        </div>
    )
}
export default Chat