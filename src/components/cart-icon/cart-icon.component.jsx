import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart.selector';

import { ShoppingIcon,CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
    const dispach = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispach(setIsCartOpen(!isCartOpen));


    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
      );
}

export default CartIcon;