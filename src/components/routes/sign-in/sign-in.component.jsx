import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../../utlis/firebase/firebase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        try{
            const { user } = await signInWithGooglePopUp();
            createUserDocumentFromAuth(user)
        }
        catch(error){
            console.log(error.message);
        }
        
    }
    return(
        <div>
            <h1> Sign In </h1>
            <button onClick={logGoogleUser}>
                Sign In
            </button>
        </div>
        
    );
}

export default SignIn;