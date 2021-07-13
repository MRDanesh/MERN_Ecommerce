import React, {useState, useEffect, createRef, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../actions/userActions';

const Header = ({open, setOpen}) => {
    // REDUX 
    const dispatch = useDispatch();
    const userLogin =useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    //DROPDOWN
    const dropdownContainer = createRef();
    const handleClickOutside = (e) => {
        if(dropdownContainer.current && !dropdownContainer.current.contains(e.target)) {
            setOpen(!open);
        }
    };

    const handleClickInside = (e) => {
        if (mainDrop.current.contains(e.target)) {
            setOpen(!open);
        }
    }

    const mainDrop = useRef();
    console.log(mainDrop);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mousedown', handleClickInside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickInside);
        };

    }, [open]);

    const renderLogin = () => {
        return (
            <Link ref={mainDrop} to={`/login`} className='header__Link'>
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
        //onClick={() => setOpen(!open)}
        return (
            <div className='profile__container'>
                <div ref={mainDrop} className='header__Link renderProfile'>
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
                <div >
                    {userInfo ? <div>{renderProfile()}</div>  : renderLogin()}
                </div>
                
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
