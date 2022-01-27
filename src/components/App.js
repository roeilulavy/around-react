import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import "../index.css";
import api from "../utils/api";
import React, { useState } from "react";
import CurrentUser from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  React.useEffect(() => {
    async function getUserData() {
      setIsLoading(true);
      try {
        const userInfo = await api.getUserInfo();

        if (userInfo) {
          setCurrentUser(userInfo);
        }
      } catch (error) {
        console.log("Error! ", error);
        alert("Something went wrong getting user data..");
      } finally {
        setIsLoading(false);
      }
    }
    getUserData();
  }, []);

  React.useEffect(() => {
    async function getCardsData() {
      setIsLoading(true);
      try {
        const cardsData = await api.getInitialCards();

        if (cardsData) {
          setCards(cardsData);
        }
      } catch (error) {
        console.log("Error! ", error);
        alert("Something went wrong getting cards data..");
      } finally {
        setIsLoading(false);
      }
    }
    getCardsData();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);

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
    const cardId = card;

    try {
      const deletedCard = await api.deleteCard(card._id);
      if (deletedCard) {
        setCards((cards) => cards.filter((item) => item._id !== cardId._id));
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong with handleCardDelete..");
    }
  }

  async function handleAddPlaceSubmit(name, link) {
    try {
      const addNewCard = await api.addNewCard(name, link);

      if (addNewCard) {
        setCards([addNewCard, ...cards]);
        closeAllPopups();
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong adding new place..");
    }
  }

  async function handleUpdateUser({ name, description }) {
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

  async function handleUpadeAvatar({ avatar }) {
    try {
      const setUserAvatar = await api.setUserAvatar(avatar);

      if (setUserAvatar) {
        setCurrentUser({ ...currentUser, avatar });
        closeAllPopups();
      }
    } catch (error) {
      console.log("Error! ", error);
      alert("something went wrong with Update user avatar..");
    }
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopup(false);
    setIsEditAvatarPopup(false);
    setIsImagePopup(false);
    setIsDeleteCardPopupOpen(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopup(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
    setIsImagePopup(true);
  }

  return (
    <CurrentUser.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main
            isLoading={isLoading}
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

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpadeAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onUpdateCard={handleAddPlaceSubmit}
          />

          <PopupWithForm
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            name="delete-card"
            title="Are you sure?"
            buttonText="Yes"
          ></PopupWithForm>

          <Footer />
        </div>
      </div>
    </CurrentUser.Provider>
  );
}

export default App;
