function Main() {
  return (
    <main className="content">

      <section className="profile">
        <div className="profile__profile-holder">
          <img className="profile__profile-image" alt="User profile picture" />
          <button type="button" className="profile__edit-picture"></button>
        </div>

        <div className="profile__profile-info">
          <h1 className="profile__title">Cousteau</h1>
          <button type="button" className="profile__edit-button"></button>
          <p className="profile__description">Explorer</p>
        </div>
        
        <button type="button" className="profile__add-button"></button>
      </section>

      <section className="elements"></section>

    </main>
  );
}

export default Main;
