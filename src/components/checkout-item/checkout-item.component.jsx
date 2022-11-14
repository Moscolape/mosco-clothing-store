import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const decrease = () => removeItemFromCart(cartItem);
    const increase = () => addItemToCart(cartItem);
    const clear = () => deleteItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src= {imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={decrease}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={increase}>&#10095;</span>
            </div>
            <span className='price'>${price}</span>
            <div onClick={clear} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;