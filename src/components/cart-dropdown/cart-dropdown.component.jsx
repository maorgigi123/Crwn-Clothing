import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CardContext } from '../../context/cart-context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen, isCartOpen } = useContext(CardContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button onClick = {goToCheckoutHandler}> GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;