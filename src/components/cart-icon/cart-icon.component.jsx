import { useContext } from 'react';

import { CardContext } from '../../context/cart-context';


import { ShoppingIcon,CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CardContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
      );
}

export default CartIcon;