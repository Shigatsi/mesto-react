function PopupWithForm ({isOpen, onClose, onSubmit, ...props }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup_hidden"}`}  id={`edit-${props.name}`}>
    <div className="popup__content">
      <form onSubmit={onSubmit} className="popup__form" name={`edit_${props.name}`} method="POST" action="#" noValidate>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
        <button type="submit" id={`profile-${props.name} `}className="popup__save-button">{props.submited}</button>
      </form>
    <button type="button" id={`${props.name}-close`} onClick = {onClose} className="popup__close-button"></button>
    </div>
  </section>
  )
}

export default PopupWithForm;
