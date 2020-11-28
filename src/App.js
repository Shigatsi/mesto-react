
function App() {
  return (

    <div class="page">
      <header class="header">
        <img class="header__logo" src="./images/logo.svg" alt="Логотип Mesto Russia"/>
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__data">
            <div class="profile__avatar-conteiner">
              <img class="profile__avatar" src="./images/avatar.jpg" alt="фото Профиля"/>
              <div class="profile__avatar-overlay">
                <button class="profile__avatar-edit-button" type="button"></button>
              </div>
            </div>
              <div class="profile__info">
                <p class="profile__name">Жак-Ив Кусто </p>
                <p class="profile__lifestyle">Исследователь океана</p>
                <button class="profile__edit-button" type="button"></button>
            </div>
          </div>
            <button class="profile__add-button" type="button"></button>
        </section>
        <section class="elements">

        </section>
        <footer class="footer">
          <p class="footer__copyright">	&#169;Евгения "Shigatsi" Зубкова</p>
        </footer>
        <section class="popup popup_hidden"  id="edit-profile" >
          <div class="popup__content">
            <form class="popup__form" name="edit_profile" method="POST" action="#" novalidate>
              <h2 class="popup__header">Редактировать профиль</h2>
              <input type="text" id="popup_name" name="name" minlength="2" maxlength="40" pattern="[а-яёА-ЯЁA-Za-z \-]*" required placeholder="Имя, Фамилия" class="popup__input"/>
              <span class='popup__input-error popup__input-error_hidden' id='popup_name-input-error'></span>
              <input type="text" id="popup_lifestyle" name="about" minlength="2" maxlength="200" required placeholder="Род занятий/хобби" class="popup__input"/>
              <span class='popup__input-error popup__input-error_hidden' id='popup_lifestyle-input-error'></span>
              <button type="submit" id="profile-submit" class="popup__save-button">Сохранить</button>
            </form>
          <button type="button" id="profile-close"  class="popup__close-button"></button>
          </div>
        </section>
        <section class="popup popup_hidden" id="edit-place" >
          <div class="popup__content">
            <form class="popup__form" name="edit_place" method="POST" action="#" novalidate>
              <h2 class="popup__header">Новое место</h2>
              <input type="text" id="popup_place" name="place" minlength="1" maxlength="30" required placeholder="Название" class="popup__input"/>
              <span class='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
              <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" class="popup__input"/>
              <span class='popup__input-error' id='popup_link-input-error'></span>
              <button type="submit" id="place-submit" class="popup__save-button">Сохранить</button>
            </form>
            <button type="button" id="place-close" class="popup__close-button"></button>
          </div>
        </section>
        <section class="popup popup_hidden" id="img-fullsize">
          <div class="popup__content popup_type_image-disp" >
            <button type="button" id="img-close" class="popup__close-button"></button>
            <figure class="popup__fullsize-img-container">
            <img class = "popup__fullsize-img" src="#" alt=""/>
              <figcaption class="popup__fullsize-img-caption"></figcaption>
            </figure>
          </div>
        </section>
        <section class="popup popup_hidden" id="confirm">
          <div class="popup__content">
              <form class="popup__form" name="confirm" method="POST" action="#" novalidate>
                <h2 class="popup__header">Вы уверены?</h2>
                <button type="submit" id="confirm-submit" class="popup__save-button">Да</button>
              </form>
            <button type="button" id="confirm-close" class="popup__close-button"></button>
          </div>
        </section>
        <section class="popup  popup_hidden" id="edit-avatar">
          <form class="popup__form" name="edit_avatar" method="POST" action="#" novalidate>
            <h2 class="popup__header">Обновить аватар</h2>
            <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" class="popup__input"/>
            <span class='popup__input-error' id='popup_link-input-error'></span>
            <button type="submit" id="avatar-submit" class="popup__save-button">Сохранить</button>
          </form>
          <button type="button" id="place-close" class="popup__close-button"></button>
        </section>
      </main>
  </div>
  // <template id ="element-template">
  //   <div class="elements__item">
  //     <button class="elements__rbin-button" type="button"></button>
  //     <img class="elements__image" src="#"  alt=""/>
  //     <div class="elements__bar">
  //       <h2 class="elements__title"></h2>
  //       <div class="elements__like-bar">
  //         <button class="elements__like-button elements__like-button_empty" type="button"></button>
  //         <p class="elements__like-counter"></p>
  //       </div>
  //     </div>
  //   </div>
  // </template>

  );
}

export default App;
