function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" id="edit-profile-form" name="user_info">
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
            <button
              type="submit"
              className="popup__submit popup__submit_type_disable"
            >
              Save
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
