function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-open' : ""}`}>
        <div className="popup__content">
          <button type="button" className="popup__close" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" name={props.name}>
            {props.children}
            <button type="submit" className="popup__submit popup__submit_type_disable">Save</button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
