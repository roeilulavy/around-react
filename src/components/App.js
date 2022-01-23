import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import "../index.css";
import { api } from "../utils/api";
import React, { useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isEditAvatarPopupOpen, setStateEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setStateAddPlacePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setStateImagePopup] = useState(false);

  React.useEffect(() => {
    getUserData();
    getCardsData();
  }, []);

  async function getUserData() {
    try {
      const userInfo = await api.getUserInfo();

      if (userInfo) {
        setCurrentUser(userInfo);
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("Something went wrong getting user data..");
    }
  }

  async function getCardsData() {
    try {
      const cardsData = await api.getInitialCards();

      if (cardsData) {
        setCards(cardsData);
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("Something went wrong getting cards data..");
    }
  }

  async function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    try {
      const updatedCard = await api.changeLikeCardStatus(card._id, !isLiked);

      if (updatedCard) {
        setCards((cards) =>
          cards.map((oldCard) =>
            oldCard._id === card._id ? updatedCard : oldCard
          )
        );
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong with HandleLike..");
    }
  }

  async function handleCardDelete(card) {
    const deletedCard = card;

    try {
      const cardDelete = await api.deleteCard(card._id);
      if (cardDelete) {
        setCards((cards) => cards.filter((c) => c._id !== deletedCard._id));
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong with handleCardDelete..");
    }
  }

  async function handleUpdateUser({name, description}) {
    try {
      const updateUserInfo = await api.setUserInfo(name, description);

      if (updateUserInfo) {
        setCurrentUser(updateUserInfo);
        closeAllPopups();
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong with Update user..");
    }
  }

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
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <ImagePopup
            selectedCard={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
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
