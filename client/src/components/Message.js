import React from 'react'

const Message = ({error}) => {
    return (
        <div className='error__container' >
            <div className='error__container__icon'>
                <img
                    className='header__icon'
                    src='/images/icons/error_white_24dp.svg'
                    alt=''
                />
            </div>
            <div className='error__container__text'>
                <div>
                    Error!
                </div>
                <div>
                {error}
                </div>
            </div>
            
        </div>
    )
}

export default Message
