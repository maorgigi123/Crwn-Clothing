import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utlis/firebase/firebase.utils'


import Button from '../button/button.component';

import { SignUpContainer } from './sing-up-form.style';

const defaultFormFields = {
    displayName : '',
    email : '',
    password: '',
    confirmPassword: ''
}

const SignUpForm= () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit= async (event) => {
        event.preventDefault();
        if(!(password === confirmPassword)) {
            alert('password do not match');
            return
        };
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use')
            {
                alert('email already in use');
            }
            else{
                console.log('user creation encountered an error', error.message);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value });

    }
    
    return (
        <SignUpContainer>
            <h2>Don`t have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name" 
                    type="text"
                    onChange={handleChange} 
                    required 
                    name="displayName" 
                    value={displayName}
                 />

                <FormInput
                    label="Email" 
                    type="email"
                    onChange={handleChange} 
                    required 
                    name="email" 
                    value={email}
                 />

                <FormInput 
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name="password" 
                    value={password} 
                />

                <FormInput
                    label="Confirm Password" 
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name="confirmPassword"
                    value={confirmPassword}
                 />

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;