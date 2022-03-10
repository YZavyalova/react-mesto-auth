import React, {useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../context/CurrentUserContext";
import { useFormWithValidation } from "./hooks/useFormWithValidation.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    React.useEffect(() => {
        values.name = currentUser.name;
        values.about = currentUser.about;
    }, [currentUser, isOpen]);

    
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
    } 

    return(
        <PopupWithForm 
            name="profile" 
            title="Редактировать профиль" 
            buttonText= "Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={ !isValid }
        >
            <input 
                id="name" 
                name="name" 
                type="text" 
                value={values.name || ''}
                onChange={handleChange} 
                className="popup__input popup__input_type_name" 
                required 
                placeholder="Имя" 
                minLength="2" 
                maxLength="40" 
                autoComplete="off"/>
            <span className="error" id="name-error">
                {errors.name || ''}
            </span>
            <input 
                id="job" 
                name="about" 
                type="text" 
                value={values.about || ''}
                onChange={handleChange} 
                className="popup__input popup__input_type_job" 
                required 
                placeholder="О себе" 
                minLength="2" 
                maxLength="200" 
                autoComplete="off"/>
            <span className="error" id="job-error">
                {errors.about|| ''}
            </span>
        </PopupWithForm>
    );
}


export default EditProfilePopup;