import PopupWithForm from "./PopupWithForm";
import { CurrentUser } from "../contexts/CurrentUser";
import { useState, useContext, useEffect } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUser);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, description, });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit-profile"
      title="Edit Profile"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        id="input_type_name"
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />

      <span id="input_type_name-error" className="popup__error"></span>

      <input
        id="input_type_description"
        type="text"
        name="description"
        className="popup__input popup__input_type_description"
        placeholder="About me"
        minLength="2"
        maxLength="200"
        required
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
      />

      <span id="input_type_description-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
