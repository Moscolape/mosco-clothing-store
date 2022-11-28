import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const decreaseItems = () => removeItemFromCart(cartItem);
    const increaseItems = () => addItemToCart(cartItem);
    const clearItems = () => deleteItemFromCart(cartItem);

    return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItems}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItems}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItems}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
    )
}

export default CheckoutItem;