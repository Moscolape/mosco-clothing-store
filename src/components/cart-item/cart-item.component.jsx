import {CartItemContainer, CartItemImage, ItemDetails} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
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
};

export default CartItem;