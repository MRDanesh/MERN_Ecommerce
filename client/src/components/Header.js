import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';


const Header = () => {
    return (
        <header className='header'>
            <div className='header__left'>
                
                <Link className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/home_black_24dp.svg'
                    />
                    Home
                </Link>
                
            </div>
            <div className='header__right'>
                <Link className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/account_circle_black_24dp.svg'
                    />
                    <p>
                        Profile
                    </p>
                </Link>
                
                <Link className='header__Link'>
                    <img
                        className='header__icon'
                        src='/images/icons/shopping_cart_black_24dp.svg'
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
