import React from 'react';
import './form-input.styles.scss'

const FormInPut = ({label,...otherProps}) => {
    return (
        <div className="form-container">
            <input className="form-input" label={label} {...otherProps} />
        </div>
    )
}

export default FormInPut;