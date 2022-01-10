function Card(props){
  
  function handleClick(){
    props.onCardClick(props.card);
  }

  return(
        <article className="elements__element">
          <img className="elements__image" src={props.link} alt={props.name} onClick={handleClick} />
          <button
            className="elements__delete-button"
            type="button"
            name="delete-button"
          ></button>
          <div className="elements__holder">
            <h2 className="elements__caption">{props.title}</h2>
            <div className="elements__like-wrapper">
              <button type="button" className="elements__like-button"></button>
              <p className="elements__like-counter">{props.likes}</p>
            </div>
          </div>
        </article>
  );
}

export default Card;