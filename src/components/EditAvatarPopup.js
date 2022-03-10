import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormWithValidation } from "./hooks/useFormWithValidation.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(values);
    } 

    useEffect(() => {
        resetForm()
    }, [isOpen, resetForm]);

    return(
        <PopupWithForm
            name="avatar" 
            title="Обновить аватар" 
            buttonText= "Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={ !isValid }
        >
            <input 
                id="avatar-src" 
                name="avatar" 
                type="url" 
                className="popup__input popup__input_type_avatar-src" 
                required 
                placeholder="Ссылка на картинку"
                onChange={handleChange}
                value={values.avatar || '' }
            />
            <span className="error" id="avatar-src-error">
                {errors.avatar || ''}
            </span>
        </PopupWithForm>
    );
}


export default EditAvatarPopup;