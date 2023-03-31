import {CartItemContainer, CartItemImage, ItemDetails} from './cart-item.styles';
import { FC, memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';


type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
    const {name, price, imageUrl, quantity} = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src= {imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
});

export default CartItem;