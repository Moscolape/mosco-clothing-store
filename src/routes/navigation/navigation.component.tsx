import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as MoscoLogo } from '../../assets/crown.svg';

import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from "./navigation.styles";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <MoscoLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink> 
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>LOGOUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                LOGIN
                            </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;