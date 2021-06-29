import React from 'react';
import ReactDOM from 'react-dom';

const MyModal = () => {
    return ReactDOM.createPortal(
        <div className='ui dimmer modals visible active modal__dimmer'>
            <div className='ui standard modal visible active modal__active'>
                Are you sure you want to delete it?
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default MyModal;