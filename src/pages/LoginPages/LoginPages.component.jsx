import React,{useState} from 'react'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button'
import { ReactComponent as ArrowLogo } from '../../component/svg/arrow.svg'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { signInWithGoogle,auth,createUserProfileDocument } from '../../firebase/firebase.utils'

import './LoginPages.styles.scss'

const LoginPage = ({LoginStart}) => {
    const [ userCredentials, setUserCredentials ] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { userName, email, password, confirmPassword } = userCredentials;

    // const userNameRef = useRef()
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const confirmPasswordRef = useRef()

    // const { signup } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords Don't Match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth,email, password)
            
            await createUserProfileDocument(user, { userName })
            
            setUserCredentials({
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            
        } catch (error) {
            console.error(error);
        }

        // LoginStart({userName,email,password})
    };

    const handleChange = event => {
        // event.preventDefault()
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <div>
            <h2 className="form-header">Login In</h2>
            <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
                <FormInput
                    name="userName"
                    type="text"
                    label="Username"
                    value={userName}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={password}
                    onChange={ handleChange }
                    required
                >
                </FormInput>
                <FormInput
                    name="confirmPassword"
                    type="password"
                    label="confirm password"
                    placeholder="Confrim Password"
                    value={confirmPassword}
                    onChange={ handleChange }
                    required
                />
                <CustomButton type='submit'>Continue <ArrowLogo className="arrow-logo" /></CustomButton>
            <CustomButton styles={{width:'10px'}} onClick={signInWithGoogle}>Sign In With Google </CustomButton>
                </form>
            </div>
    </div>)
}

export default LoginPage