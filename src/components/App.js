import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main />
          <Footer />

          <PopupWithForm />

          <ImagePopup />
        </div>
      </div>

      <div className="popup popup_type_edit-profile">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Edit profile</h3>
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

      <div className="popup popup_type_add-card">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">New Place</h3>
          <form className="popup__form" id="add-card-form" name="new-card_info">
            <input
              id="input_type_title"
              type="text"
              name="name"
              className="popup__input popup__input_type_card-name"
              placeholder="Title"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              required
            />
            <span
              id="input_type_title-error"
              className="popup__error popup__error_visible"
            ></span>
            <input
              id="input_type_pic"
              type="url"
              name="link"
              className="popup__input popup__input_type_card-link"
              placeholder="Image link"
              required
            />
            <span id="input_type_pic-error" className="popup__error"></span>
            <button
              type="submit"
              className="popup__submit popup__submit_type_disable"
            >
              Create
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Are you sure?</h3>
          <form className="popup__form" id="delete-card" name="delete-card">
            <button type="submit" className="popup__submit">
              Delete
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-profile-picture">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Cange profile picture</h3>
          <form
            className="popup__form"
            id="edit-profile-picture"
            name="edit-profile-picture"
          >
            <input
              id="input_type_url"
              type="url"
              name="avatar"
              className="popup__input popup__input_type_avatar-link"
              placeholder="Image link"
              required
            />
            <span id="input_type_url-error" className="popup__error"></span>
            <button
              type="submit"
              className="popup__submit popup__submit_type_disable"
            >
              Save
            </button>
          </form>
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
