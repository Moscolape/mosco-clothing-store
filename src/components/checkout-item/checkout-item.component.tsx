import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action';

import { selectCartItems } from '../../store/cart/cart.selector';
import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles';

import { FC, memo } from 'react';
import { CartItem } from '../../store/cart/cart.types';


type CheckoutItemProps = {
  cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({cartItem}) => {
  const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const {name, imageUrl, price, quantity} = cartItem;

    const decreaseItems = () => dispatch(removeItemFromCart(cartItems,cartItem));
    const increaseItems = () => dispatch(addItemToCart(cartItems,cartItem));
    const clearItems = () => dispatch(deleteItemFromCart(cartItems,cartItem));

    return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItems}>-</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItems}>+</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItems}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
    )
});

export default CheckoutItem;
