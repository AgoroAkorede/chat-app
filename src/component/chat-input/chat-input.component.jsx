import React,{useState} from 'react';
import './chat-input.styles.scss';
import CircleButton from '../circlebutton/circle-button'

const ChatInput = ({label,...otherProps}) => {
    const [ message, setMessage ] = useState("");
    const sendMessage=() => {
        
    }

    return (
        <div className='chat-input'>
            <form className='chat-input_form'>
                <input className="chat-input-element" label={ label } { ...otherProps }
                    type='text'
                    onChange={ (event) => setMessage(event.target.value) } />
                 <CircleButton onClick={sendMessage}>></CircleButton>

            </form>
        </div>
    )
}

export default ChatInput