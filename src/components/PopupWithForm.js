import React, { useEffect } from 'react';

function PopupWithForm(props) {

    const handleOverlayClose = e => {
        if (e.target === e.currentTarget && props.isOpen) {
            props.onClose();
        }
    }
    
    useEffect(() => {
        if (!props.isOpen) return;
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                props.onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape)
        
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [props.isOpen])

    return(
        <div 
            className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}
            onMouseDown={handleOverlayClose}
        >
            <div className="popup__container">
                <button type="button" className="popup__close-btn" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`popup-form_${props.name}`} onSubmit={props.onSubmit}>
                    {props.children}
                    <button 
                        type="submit" 
                        className={`popup__button popup__save-btn ${props.isDisabled ? 'popup__button_invalid' : ''}`}
                        disabled={props.isDisabled}
                    >{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;