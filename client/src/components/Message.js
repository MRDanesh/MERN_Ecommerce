import React from 'react'

const Message = ({error}) => {
    return (
        <div className='error__container' >
            {error}
        </div>
    )
}

export default Message
