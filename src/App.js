import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="page__wrapper">
        <header class="header">
          <img class="header__logo" alt="Around the U.S logo" />
        </header>

        <main class="content">
          <section class="profile">
            <div class="profile__profile-holder">
              <img class="profile__profile-image" alt="User profile picture" />
              <button type="button" class="profile__edit-picture"></button>
            </div>
            <div class="profile__profile-info">
              <h1 class="profile__title">Cousteau</h1>
              <button type="button" class="profile__edit-button"></button>
              <p class="profile__description">Explorer</p>
            </div>
            <button type="button" class="profile__add-button"></button>
          </section>

          <section class="elements"></section>

          <footer class="footer">
          <p class="footer__copyright">© 2021. Royal prod.</p>
        </footer>

          <div class="popup popup_type_edit-profile">
            <div class="popup__content">
              <button type="button" class="popup__close"></button>
              <h3 class="popup__title">Edit profile</h3>
              <form class="popup__form" id="edit-profile-form" name="user_info">
                <input
                  id="input_type_name"
                  type="text"
                  name="name"
                  class="popup__input popup__input_type_name"
                  placeholder="Name"
                  minlength="2"
                  maxlength="40"
                  required
                />
                <span id="input_type_name-error" class="popup__error"></span>
                <input
                  id="input_type_description"
                  type="text"
                  name="description"
                  class="popup__input popup__input_type_description"
                  placeholder="About me"
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span
                  id="input_type_description-error"
                  class="popup__error"
                ></span>
                <button
                  type="submit"
                  class="popup__submit popup__submit_type_disable"
                >
                  Save
                </button>
              </form>
            </div>
          </div>

          <div class="popup popup_type_add-card">
            <div class="popup__content">
              <button type="button" class="popup__close"></button>
              <h3 class="popup__title">New Place</h3>
              <form class="popup__form" id="add-card-form" name="new-card_info">
                <input
                  id="input_type_title"
                  type="text"
                  name="name"
                  class="popup__input popup__input_type_card-name"
                  placeholder="Title"
                  minlength="2"
                  maxlength="30"
                  autocomplete="off"
                  required
                />
                <span
                  id="input_type_title-error"
                  class="popup__error popup__error_visible"
                ></span>
                <input
                  id="input_type_pic"
                  type="url"
                  name="link"
                  class="popup__input popup__input_type_card-link"
                  placeholder="Image link"
                  required
                />
                <span id="input_type_pic-error" class="popup__error"></span>
                <button
                  type="submit"
                  class="popup__submit popup__submit_type_disable"
                >
                  Create
                </button>
              </form>
            </div>
          </div>

          <div class="popup popup_type_delete-card">
            <div class="popup__content">
              <button type="button" class="popup__close"></button>
              <h3 class="popup__title">Are you sure?</h3>
              <form class="popup__form" id="delete-card" name="delete-card">
                <button type="submit" class="popup__submit">
                  Delete
                </button>
              </form>
            </div>
          </div>

          <div class="popup popup_type_edit-profile-picture">
            <div class="popup__content">
              <button type="button" class="popup__close"></button>
              <h3 class="popup__title">Cange profile picture</h3>
              <form
                class="popup__form"
                id="edit-profile-picture"
                name="edit-profile-picture"
              >
                <input
                  id="input_type_url"
                  type="url"
                  name="avatar"
                  class="popup__input popup__input_type_avatar-link"
                  placeholder="Image link"
                  required
                />
                <span id="input_type_url-error" class="popup__error"></span>
                <button
                  type="submit"
                  class="popup__submit popup__submit_type_disable"
                >
                  Save
                </button>
              </form>
            </div>
          </div>

          <div class="popup popup_type_image-preview">
            <div class="popup__content-wrapper">
              <button type="button" class="popup__close"></button>
              <img class="popup__image" alt="" />
              <figure class="popup__figure"></figure>
            </div>
          </div>

        </main>
      </div>

      <template id="element-template">
        <article class="elements__element">
          <img class="elements__image" alt="" />
          <button
            type="button"
            class="elements__delete-button"
            name="delete-button"
          ></button>
          <div class="elements__holder">
            <h2 class="elements__caption"></h2>
            <div class="elements__like-wrapper">
              <button type="button" class="elements__like-button"></button>
              <p class="elements__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
