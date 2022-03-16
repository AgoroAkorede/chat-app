import React from 'react';

import './circle-button.scss';

const addItem=() => {
    
}

const CircleButton = ({children,...props}) => (
    <button className="circle-button" {...props} >
        {children}
        </button>
)

export default CircleButton;