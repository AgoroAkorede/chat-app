import React,{useState} from 'react';
import { createChat } from '../../redux/chat/chat.action';
import {connect} from 'react-redux'


import SearchBox from '../search-box/search-box.component'
import CircleButton from '../circlebutton/circle-button'
// import CreateChat from '../create-chat/create-chat.component'
import ChatInput from '../chat-input/chat-input.component'
import Message from '../message/message.component';

const Chat = ({createChat}) => {
    const [chat,setChat]=useState({chatMessage:""})

    const handleChange = event => {
        setChat({ chatMessage: event.target.value });
        console.log(chat)
    }

    const sendMessage = () => {
        
    }

    return (
        <div>
            <h1>{ }</h1>
           <ChatInput placeholder="Start A Conversation"  />
          
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    createChat: (message) =>  createChat(dispatch(message))
})

// export default connect(null,mapDispatchToProps)(Chat)
export default Chat