import '../css/contacts.css';
import WhatsApp from '../img/WhatsApp.png';
import Telegram from '../img/Telegram.png';
export default function Contacts() {
  return (
    <section data-aos="fade-up" className="contasts">
      <div className="container">
        <h1>Наши контакты</h1>
        <div className="Contacts-content">
          <div className="Contacts-1">
            <img className='map' src="img/image 10.png" alt="" />
          </div>
          <div className="Contacts-2">
            <h3>контакты</h3>
            <h4>Адрес:</h4>
            <p>Республика Башкортостан г. Уфа, ул. Индустриальное шоссе 112/1</p>
            <h4>Время работы :</h4>
            <p>Понедельник-суббота 09.00-22.00ч</p>
            <h4>Телефоны:</h4>
            <p>+7 (922) 202-12-20 </p>
            <p>+7 (996) 103-95-80</p>
            <h4>E-mail:</h4>    
            <p>ateevtemur@yandex.ru</p>
           <div className="oen-row">
           <h4>Мессенджеры:</h4>
            <img src={WhatsApp} alt="" />
            <img src={Telegram} alt="" />

           </div>
          </div>
        </div>
      </div>
    </section>
  );
}
