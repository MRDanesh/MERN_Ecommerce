import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
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
                <Link to={`/`} className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/account_circle_black_24dp.svg'
                        alt=''
                    />
                    <p>
                        Profile
                    </p>
                </Link>
                
                <Link to={`/`} className='header__Link'>
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
