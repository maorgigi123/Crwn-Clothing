import { useContext } from 'react';

import { CardContext } from '../../context/cart-context';

import './checkout-item.styles.scss';
const CheckoutItem = ({product}) => {
    const {addItemToCart,removeItemFromCart,clearItemFromCart} = useContext(CardContext);
    const { name, imageUrl, price, quantity} = product;

    const clearItemHandler = () => clearItemFromCart(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt = {`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick ={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick ={clearItemHandler}>&#10005;</div>
            {/* <img src={imageUrl} alt = {`${name}`}/>
            <span>{name}</span>
            <div>
                <span className='arrow' onClick ={() =>removeItemFromCart(product)}>{` < `}</span>
                <span>{quantity}</span>
                <span className='arrow' onClick={() => addItemToCart(product)}>{` > `}</span>
            </div>
            <span>{price}</span>
            <span className='arrow' onClick ={() => removeFromCart(product)}>X</span> */}
        </div>
    );
}
export default CheckoutItem;