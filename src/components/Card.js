import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card({
  card,
  id,
  link,
  title,
  likes,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = `card__delete-button ${
    isLiked ? "elements__like-button_active" : "elements__like-button"
  }`;

  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "elements__delete-button" : "elements__delete-button_hidden"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteButton() {
    onCardDelete(card);
  }

  return (
    <article className="elements__element">
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        name="delete-button"
        onClick={handleDeleteButton}
      ></button>
      <div className="elements__holder">
        <h2 className="elements__caption">{title}</h2>
        <div className="elements__like-wrapper">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="elements__like-counter">{likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
