import { useContext } from 'react';

import {CardContext} from '../../../context/cart-context';

import CheckoutItem from '../../checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems,totalPrice } = useContext(CardContext);
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Description</span>

                </div>
                <div className='header-block'>
                    <span>Products</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                <   span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} product={cartItem}/>
            ))}
            {totalPrice > 0 && <span className='total'>Total:${totalPrice}</span>}
        </div>
    );
}

export default Checkout;