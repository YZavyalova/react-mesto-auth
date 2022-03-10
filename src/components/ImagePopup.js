import React, { useEffect } from "react";


function ImagePopup({card, onClose}) {
    
    const isOpen = !!card;

    const handleOverlayClose = e => {
        if (e.target === e.currentTarget && isOpen) {
            onClose();
        }
    }
    
    useEffect(() => {
        if (!isOpen) return;
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape)
        
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen])

    return(
        <div className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`}
            onMouseDown={handleOverlayClose}
        >
            <div className="popup__content">
                <button type="button" className="popup__close-btn popup__close-btn_image" onClick={onClose}/>
                <figure className="popup__figure">
                    <img src={card.link} alt={card.name} className="popup__pic"/>
                    <figcaption className="popup__figcaption">{card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}


export default ImagePopup;