import Card from "./Card";
import {api} from "../utils/api";
import { useContext, useState } from "react";
import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";


function Main(props, onCardLike, onCardClick) {

  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([])

  // React.useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const [cardsData] = await Promise.all([
  //         api.getInitialCards()
  //       ])

  //       if(cardsData) {
  //         setCards(cardsData)
  //       }
  //     }
  //     fetchData();
  //   } catch(error) {
  //     console.log('Error! ', error);
  //     alert("Something went wrong..")
  //   }
  // }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__profile-holder">
          <img className="profile__profile-image" src={currentUser.avatar} alt="User avatar" />
          <button type="button" className="profile__edit-picture" onClick={props.onEditAvatarClick}></button>
        </div>

        <div className="profile__profile-info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfileClick}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        
        <button type="button" className="profile__add-button" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="elements">
        {
          cards.map((card) => {
            return(
              <Card
              card = {card}
              key = {card._id}
              title = {card.name}
              link = {card.link}
              likes = {`${card.likes.length}`}
              onCardClick = {onCardClick}
              onCardLike = {onCardLike}
              />
            )
          })
        }
      </section>
    </main>
  );
}

export default Main;