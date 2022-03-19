import React from 'react';
import './form-input.styles.scss'

const FormInput = ({ onChange, label, ...otherProps }) => {

    return (
        <div className="form-container">
            <input className="form-input" label={label}  {...otherProps} onChange={onChange} />
            
        </div>
    )
}

export default FormInput;