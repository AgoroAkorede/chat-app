import React,{useRef} from 'react'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button'
import { ReactComponent as ArrowLogo } from '../../component/svg/arrow.svg'

import {ReactComponent as PasswordIcon} from '../../component/svg/eye.svg'
import {useAuth} from '../../Auth/AuthContext'

import './LoginPages.styles.scss'

const LoginPage = () => {
    // const [ userCredentials, setUserCredentials ] = useState({
    //     userName: '',
    //     email: '',
    //     password: '',
    //     confrimPassword: ''
    // });
    // const { userName, email, password, confrimPassword } = userCredentials;

    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    // const { signup } = useAuth();

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <h1 className="form-header">Login In</h1>
            <div className="form-container">
        <form className="form">
                <FormInput
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Username"
                    ref={userNameRef}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    ref={emailRef}
                    required
                />
                <FormInput
                    name="passwrd"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                >
                </FormInput>
                <FormInput
                    name="confirm password"
                    type="password"
                    label="confirm password"
                    placeholder="Confrim Password"
                    ref={confirmPasswordRef}
                    required
                />
                <CustomButton>Continue <ArrowLogo className="arrow-logo" /></CustomButton>
                </form>
                </div>
    </div>)
}

export default LoginPage