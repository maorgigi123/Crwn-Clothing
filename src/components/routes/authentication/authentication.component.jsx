
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

import './Authentication.style.scss';

const Authentication = () => {
    
    return(
        <div>
            <div className='authentication-container'>
                <SignInForm/>
                <SignUpForm/>
            </div>
        </div>
        
    );
}

export default Authentication;