import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CartsIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
// import CartItem from '../cart-item/cart-item.component';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <CartsIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;