import { useContext } from 'react';

import {CartContext} from '../../../context/cart-context';

import CheckoutItem from '../../checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const Checkout = () => {
    const { cartItems,cartTotal } = useContext(CartContext);
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Description</span>

                </HeaderBlock>
                <HeaderBlock>
                    <span>Products</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <   span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} product={cartItem}/>
            ))}
            {cartTotal > 0 && <Total>Total:${cartTotal}</Total>}
        </CheckoutContainer>
    );
}

export default Checkout;