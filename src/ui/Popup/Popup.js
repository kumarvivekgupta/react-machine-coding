import React from 'react';
import './Popup.css';

const Popup = ({ children, onClose }) => {
    return (
        <div className="popup">
        <div className="popup__content">
            <button className="popup__close" onClick={onClose}>
            &times;
            </button>
            {children}
        </div>
        </div>
    );
}

export default Popup;