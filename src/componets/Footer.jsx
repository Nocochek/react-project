import '../css/footer.css';
import logo from '../img/logo.png';
import WhatsApp from '../img/WhatsApp.png';
import Telegram from '../img/Telegram.png';

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <a>МЕНЮ</a>
            <p>Услуги</p>
            <p>Наши работы</p>
            <p>Стоимость</p>
            <p>Гарантии</p>
            <p>Отзывы</p>
          </div>        
          <div className="footer-item">
            <a>ПЕРЕТЯЖКА МЕБЕЛИ</a>
            <p>Перетяжка диванов</p>
            <p>Перетяжка кресел</p>
            <p>Перетяжка кухонного уголка</p>
            <a>ОБИВКА МЕБЕЛИ</a>
            <p>Обивка кровати</p>
            <p>Обивка стульев</p>
          </div>
          <div className="footer-item">
            <a>РЕМОНТ МЕБЕЛИ</a>
            <p>Ремонт диванов</p>
            <p>Ремонт кресел</p>
            <p>Ремонт стульев</p>
            <a>РЕСТАВРАЦИЯ МЕБЕЛИ</a>
            <p>Реставрация дивана</p>
            <p>Реставрация стульев</p>
          </div>
          <div className="footer-item">
            <a>КОНТАКТЫ</a>
            <div className="info-fot-item">
              <img src="img/footer-ico/Vector (5).svg" alt="" />
              <div className="info-fot-item-content">
                <h4>+7 (922) 202-12-20 </h4>
                <h4>+7 (996) 103-95-80</h4>
              </div>
            </div>
            <div className="info-fot-item">
              <img src="img/footer-ico/Vector-2.svg" alt="" />
              <div className="info-fot-item-content">
                <h4>Адрес: г. Уфа </h4>
                <h4>ул.Индустриальное шоссе 112/1 </h4>
              </div>
            </div>
            <div className="info-fot-item">
              <img src="img/footer-ico/mail-6 2.png" alt="" />
              <div className="info-fot-item-content">
                <h4>E-mail: </h4>
                <h4>ateevtemur@yandex.ru</h4>
              </div>
            </div>
            <div className="info-fot-item">
              <img src="img/footer-ico/Vector.svg" alt="" />
              <div className="info-fot-item-content">
                <h4>Режим работы: с 9.00 до 22.00 </h4>
                <h4>Понедельник-суббота </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-el">
          <img className='logo-fot' src={logo} alt="" />
          <a href="">Политика конфиденциальности</a>
          <div className="seti">
            <img src={WhatsApp} alt="" />
            <img src={Telegram} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
