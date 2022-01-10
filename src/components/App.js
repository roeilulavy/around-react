import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";
import { useState } from 'react';

function App() {

  const [isEditAvatarPopupOpen, setStateEditAvatarPopup] = useState(false)
  const [isEditProfilePopupOpen, setStateProfilePopup] = useState(false)
  const [isAddPlacePopupOpen, setStateAddPlacePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpen, setStateImagePopup] = useState(false)

  function closeAllPopups() {
    setStateProfilePopup(false)
    setStateAddPlacePopup(false)
    setStateEditAvatarPopup(false)
    setStateImagePopup(false)
  }

  function handleEditAvatarClick() {

    setStateEditAvatarPopup(true)

  }

  function handleEditProfileClick() {

    setStateProfilePopup(true)

  }

  function handleAddPlaceClick() {

    setStateAddPlacePopup(true)

  } 

  function handleCardClick(props) {

    setSelectedCard(props)
    setStateImagePopup(true)

  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          />

          <ImagePopup selectedCard={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            name="edit-profile-picture"
            title="Change profile picture"
            onClose={closeAllPopups}
            buttonText="Save">

            <input
              id="input_type_url_photo"
              type="url"
              name="avatar"
              className="popup__input popup__input_type_avatar-link"
              placeholder="Image link"
              required/>

            <span id="input_type_url_photo-error" className="popup__error"></span>

          </PopupWithForm>

          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            name="edit-profile"
            title="Edit Profile"
            onClose={closeAllPopups}
            buttonText="Save">

            <input
              id="input_type_name"
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required/>

            <span id="input_type_name-error" className="popup__error"></span>

            <input
              id="input_type_description"
              type="text"
              name="description"
              className="popup__input popup__input_type_description"
              placeholder="About me"
              minLength="2"
              maxLength="200"
              required/>

            <span id="input_type_description-error" className="popup__error"></span>

          </PopupWithForm>

          < PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="add-card"
            title="New Place"
            onClose={closeAllPopups}
            buttonText="Save">

            <input
              id="input_type_title"
              type="text"
              name="name"
              className="popup__input popup__input_type_card-name"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              autoComplete="off"
              required/>

            <span id="input_type_title-error" className="popup__error"></span>

            <input
              id="input_type_url"
              type="url"
              name="link"
              className="popup__input popup__input_type_card-link"
              placeholder="Image link"
              required/>

            <span id="input_type_url-error" className="popup__error"></span>

          </PopupWithForm>

          <PopupWithForm
            name="delete-card"
            title="Are you sure?"
            onClose={closeAllPopups}
            buttonText="Yes" >

          </PopupWithForm>

          <Footer />


          <ImagePopup />
        </div>
      </div>

      <template id="element-template">
        <article className="elements__element">
          <img className="elements__image" alt="" />
          <button
            type="button"
            className="elements__delete-button"
            name="delete-button"
          ></button>
          <div className="elements__holder">
            <h2 className="elements__caption"></h2>
            <div className="elements__like-wrapper">
              <button type="button" className="elements__like-button"></button>
              <p className="elements__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
