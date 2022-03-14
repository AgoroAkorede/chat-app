import React from 'react'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button'
import { ReactComponent as ArrowLogo} from  '../../component/svg/arrow.svg'

import './LoginPages.styles.scss'

const LoginPage = () => {
    return (
        <div>
        <h1 className="form-header">Sign In</h1>
        <form className="form">
                <FormInput
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Username"
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    required
                />
                <FormInput
                    name="passwrd"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    required
                />
                <FormInput
                    name="confirm password"
                    type="passwordd"
                    label="confirm password"
                    placeholder="Confrim Password"
                    required
                />
                <CustomButton>Continue <ArrowLogo className="arrow-logo" /></CustomButton>
        </form>
    </div>)
}

export default LoginPage