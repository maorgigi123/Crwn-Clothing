import { Fragment , useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../context/user.context";
import { CardContext } from "../../../context/cart-context";

import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import { signOutUser } from '../../../utlis/firebase/firebase.utils';

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CardContext);
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?(
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                            
                        ) : (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon/>
                    
                </div>
                { isCartOpen && <CartDropdown />}
                
            </div>
            <Outlet/>
        </Fragment>
    );
}
export default Navigation;