import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component'

const CreateChat = () => {

    const [ chat, setMessage ] = useState({
        message: ''
    })
    const message = chat;
    const handleChange = (event) => {
        const {message}=event.target
        setMessage({ ...message })
        console.log('working');
    }
    return(
        <div>
            <FormInput
            
                onChange={handleChange}
            />
            <FormInput />
        </div>
    )
};

export default CreateChat