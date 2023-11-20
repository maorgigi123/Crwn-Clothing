
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

import {AuthenticationContainer} from './Authentication.style'
const Authentication = () => {
    
    return(
        <div>
            <AuthenticationContainer>
                <SignInForm/>
                <SignUpForm/>
            </AuthenticationContainer>
        </div>
        
    );
}

export default Authentication;