function ImagePopup() {
  return (
    <div className="popup popup_type_image-preview">
      <div className="popup__content-wrapper">
        <button type="button" className="popup__close"></button>
        <img className="popup__image" alt="" />
        <figure className="popup__figure"></figure>
      </div>
    </div>
  );
}

export default ImagePopup;
