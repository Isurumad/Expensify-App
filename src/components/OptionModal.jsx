import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen = {!!props.isOpened}
        contentLabel ='Selected Option'
        ariaHideApp={false}
        onRequestClose={props.handleModal}
    >
        <h3>Selected Option</h3>
        {props.isOpened && <p>{props.isOpened}</p>}
        <button onClick ={props.handleModal}>Okay</button>
    </Modal>
);

export default OptionModal;