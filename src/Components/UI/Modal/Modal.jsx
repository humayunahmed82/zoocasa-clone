import React, { Fragment } from "react";

const Backdrop = (props) => {
    return (
        <div
            onClick={props.onClose}
            className={`fixed top-0 left-0 w-full h-full z-10 bg-black/60 ${props.dropClassName}`}
        />
    );
};

const ModalOverlay = (props) => {
    return (
        <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-full p-5 ${props.className}`}
        >
            {props.children}
        </div>
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            <Backdrop dropClassName={props.dropClassName} />
            <ModalOverlay className={props.className}>
                {props.children}
            </ModalOverlay>
        </Fragment>
    );
};

export default Modal;
