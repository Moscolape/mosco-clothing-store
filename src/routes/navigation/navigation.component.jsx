import { Fragment, useContext } from "react";
import {Link, Outlet} from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {ReactComponent as MoscoLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const NavigationBar = () => {
    const {currentUser }  = useContext(UserContext);
    // console.log(currentUser);


    return (
        <Fragment>
            <div className="nav-bar">
                <Link className="logo-container" to='/'>
                    <MoscoLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;