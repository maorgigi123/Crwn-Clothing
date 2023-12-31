import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES } from '../button/button.component';

import { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from '../../utlis/firebase/firebase.utils'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
const defaultFormFields = {
    email : '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithGooglePopUp();
        }
        catch(error){
            console.log(error);
        }
    }

    const handleSubmit= async (event) => {
        event.preventDefault();
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch(error){
            if(error.code === "auth/invalid-login-credentials")
            {
                alert('invalid-login-credentials');
            }
            if(error.code === "auth/too-many-requests")
            {
                alert('too many requests');
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value });

    }
    
    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

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
                <ButtonsContainer >
                    <Button type="submit">
                        Sign In
                    </Button>
                    
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContainer >
            </form>
        </SignInContainer>
    );
}

export default SignInForm;