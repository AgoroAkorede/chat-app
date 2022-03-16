import React from 'react';
import './form-input.styles.scss'

const FormInput = ({handleChange, label,...otherProps}) => {
    return (
        <div className="form-container">
            <input className="form-input" label={label} {...otherProps} onChange={handleChange} />
        </div>
    )
}

export default FormInput;