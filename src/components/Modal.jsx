import React from "react"; 
// import ReactModal from 'react-modal';

function Modal(props){
const { className, modalRef } = props;
    return(
        <div ref={modalRef} className={`${className} modal`}>
            <p>Modal de exemplo</p>
        </div>
    )
}

function openModal(){
    
}

export default Modal;