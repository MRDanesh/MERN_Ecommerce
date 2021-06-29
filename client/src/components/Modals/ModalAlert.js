import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#modal');

const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(55, 55, 55, 0.5)'
    }
};

const ModalAlert = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div className='modal'>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal 
            className='modal__alert'
            isOpen={modalIsOpen}
            style={modalStyle}
            bodyOpenClassName='modal__content'
            
            >
                <h2>Modal Title</h2>
                <p>Modal Body</p>
                <button onClick={() => setModalIsOpen(false)}>
                    Close Modal
                </button>
            </Modal>
        </div>
    );
}

export default ModalAlert;