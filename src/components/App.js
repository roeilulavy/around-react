import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";
import { api } from "../utils/api";
import React, { useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setStateEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setStateAddPlacePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setStateImagePopup] = useState(false);

  React.useEffect(() => {
    try {
      async function fetchData() {
        const userInfo = api.getUserData();

        if (userInfo) {
          setCurrentUser(userInfo);
          console.log("userInfo Success! :" + userInfo);
        }
      }
      fetchData();
    } catch (error) {
      console.log("Error! ", error);
      alert("Something went wrong..");
    }
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setStateAddPlacePopup(false);
    setStateEditAvatarPopup(false);
    setStateImagePopup(false);
  }

  function handleEditAvatarClick() {
    setStateEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setStateAddPlacePopup(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
    setStateImagePopup(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <ImagePopup
            selectedCard={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />

          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            name="edit-profile-picture"
            title="Change profile picture"
            onClose={closeAllPopups}
            buttonText="Save"
          >
            <input
              id="input_type_url_photo"
              type="url"
              name="avatar"
              className="popup__input popup__input_type_avatar-link"
              placeholder="Image link"
              required
            />

            <span
              id="input_type_url_photo-error"
              className="popup__error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            name="edit-profile"
            title="Edit Profile"
            onClose={closeAllPopups}
            buttonText="Save"
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
            />

            <span
              id="input_type_description-error"
              className="popup__error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="add-card"
            title="New Place"
            onClose={closeAllPopups}
            buttonText="Create"
          >
            <input
              id="input_type_title"
              type="text"
              name="name"
              className="popup__input popup__input_type_card-name"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              autoComplete="off"
              required
            />

            <span id="input_type_title-error" className="popup__error"></span>

            <input
              id="input_type_url"
              type="url"
              name="link"
              className="popup__input popup__input_type_card-link"
              placeholder="Image link"
              required
            />

            <span id="input_type_url-error" className="popup__error"></span>
          </PopupWithForm>

          <PopupWithForm
            name="delete-card"
            title="Are you sure?"
            onClose={closeAllPopups}
            buttonText="Yes"
          ></PopupWithForm>

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
