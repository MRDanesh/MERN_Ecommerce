import React, {useState, useEffect, createRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../actions/userActions';

const Header = () => {
    // REDUX 
    const dispatch = useDispatch();
    const userLogin =useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    //DROPDOWN
    const dropdownContainer = createRef();
    const [open, setOpen] = useState(false);
    const handleClickOutside = (e) => {
        if(dropdownContainer.current && !dropdownContainer.current.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {document.removeEventListener('mousedown', handleClickOutside)};

    }, [open]);

    const renderLogin = () => {
        return (
            <Link to={`/login`} className='header__Link'>
                <img
                    className='header__icon'
                    src='/images/icons/account_circle_black_24dp.svg'
                    alt=''
                />
                <p>
                    Login
                </p>
            </Link>
        )
    }

    const renderProfile = () => {
        return (
            <div className='profile__container'>
                <div onClick={() => setOpen(!open)} className='header__Link renderProfile'>
                    <img
                        className='header__icon'
                        src='/images/icons/account_circle_black_24dp.svg'
                        alt=''
                    />
                    <div>
                        Hello, <p className='profile__text'>{userInfo.name}</p>
                    </div>
                </div>

                {open 
                ? 
                    <div className='dropdown' ref={dropdownContainer}>
                        <ul>
                            <li><Link to='/profile'>Profile</Link></li>
                            <li onClick={() => dispatch(logout())}>Logout</li>
                        </ul>
                    </div> 
                : 
                null
                }
            </div>
            
        );
    };

    return (
        <header className='header'>
            <div className='header__left'>
                
                <Link to={`/`} className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/home_black_24dp.svg'
                        alt=''
                    />
                    Home
                </Link>
                
            </div>
            <div className='header__right'>
                {userInfo ? <div>{renderProfile()}</div>  : renderLogin()}
                
                <Link to={`/cart`} className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/shopping_cart_black_24dp.svg'
                        alt=''
                    />
                    <p>
                        Cart
                    </p>
                </Link>
                
            </div>
        </header>
    )
}

export default Header
