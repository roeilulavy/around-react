function Main() {

  function handleEditAvatarClick(e) {
    e.preventDefault();
    const popup = document.querySelector('.popup_type_edit-profile-picture');
    popup.classList.add('popup_is-open');
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    const popup = document.querySelector('.popup_type_edit-profile');
    popup.classList.add('popup_is-open');
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();
    const popup = document.querySelector('.popup_type_add-card');
    popup.classList.add('popup_is-open');
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__profile-holder">
          <img className="profile__profile-image" alt="User profile picture" />
          <button type="button" className="profile__edit-picture" onClick={handleEditAvatarClick}></button>
        </div>

        <div className="profile__profile-info">
          <h1 className="profile__title">Cousteau</h1>
          <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          <p className="profile__description">Explorer</p>
        </div>
        
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements"></section>

    </main>
  );
}

export default Main;
