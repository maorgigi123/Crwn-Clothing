import { Fragment , useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../context/user.context";
import { CardContext } from "../../../context/cart-context";

import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import { signOutUser } from '../../../utlis/firebase/firebase.utils';

import {NavigationContainer,LogoContainer,NavLinks,NavLink } from './navigation.styles'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CardContext);
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?(
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                            
                        ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon/>
                    
                </NavLinks>
                { isCartOpen && <CartDropdown />}
                
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}
export default Navigation;