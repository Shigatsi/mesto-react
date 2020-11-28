import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';


function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <PopupWithForm name="avatar" title="Обновить аватар" firstInputPlaceholder="Ссылка на аватар"/>
      <PopupWithForm name="profile" title="Редактировать профиль" firstInputPlaceholder="Имя, Фамилия" secondInputPlaceholder="Род занятий/хобби"/>
      <PopupWithForm name="place" title="Новое место" firstInputPlaceholder="Название" secondInputPlaceholder="Ссылка на картинку"/>
      <Footer/>
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
