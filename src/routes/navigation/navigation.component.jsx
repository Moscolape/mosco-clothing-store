import { Fragment } from "react";
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as MoscoLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const NavigationBar = () => {
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
                <Link className="nav-link" to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  );
}

export default NavigationBar;