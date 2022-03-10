import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormWithValidation } from "./hooks/useFormWithValidation.js";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace(values);
    } 

    useEffect(() => {
        resetForm()
    }, [isOpen, resetForm]);

    return(
        <PopupWithForm
            name="card" 
            title="Новое место" 
            buttonText= "Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={ !isValid }
        >
            <input 
                id="card-name" 
                name="name" 
                type="text" 
                className="popup__input popup__input_type_card-name" 
                required 
                placeholder="Название" 
                minLength="2" 
                maxLength="30" 
                autoComplete="off"
                value={values.name || ''}
                onChange={handleChange}
            />
            <span className="error" id="card-name-error">
                {errors.name || ''}
            </span>
            <input 
                id="card-src" 
                name="link" 
                type="url" 
                className="popup__input popup__input_type_card-src" 
                required 
                placeholder="Ссылка на картинку"
                value={values.link || ''}
                onChange={handleChange}
            />
            <span className="error" id="card-src-error">
                {errors.link || ''}
            </span>
        </PopupWithForm>
    );
}


export default AddPlacePopup;