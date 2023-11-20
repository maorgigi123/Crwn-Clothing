import { useContext } from 'react';

import {CardContext} from '../../../context/cart-context';

import CheckoutItem from '../../checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const Checkout = () => {
    const { cartItems,totalPrice } = useContext(CardContext);
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
            {totalPrice > 0 && <Total>Total:${totalPrice}</Total>}
        </CheckoutContainer>
    );
}

export default Checkout;