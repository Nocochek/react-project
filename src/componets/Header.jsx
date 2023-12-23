import '../css/Header.css';
import logo from '../img/logo.png';
import WhatsApp from '../img/WhatsApp.png';
import Telegram from '../img/Telegram.png';

const NavLink = ['Главная', 'Услуги', 'НАШИ РАБОТЫ', 'Стоимость', 'ГАРАНТИИ', 'ОТЗЫВЫ', 'Контакты'];
function OpenHeader(){
  const Menu = document.querySelector('nav')
  const ulList = document.querySelector('.ulList')
  Menu.classList.toggle('open')
  ulList.classList.toggle('open')
  
  
}

function Header() {
  return (
    <section  className="header">
      <div className="container">
        <div className="header-content">
          <img className="logo" src={logo} alt="" />
          <div className="header-content-oneBlock modila">
            <p>Перетяжка ремонт и </p>
            <p>реставрация мебели в Уфе</p>
            <p>ООО “Звездная мебель”</p>
          </div>
          <div className="header-content-oneBlock modila">
            <p>Адрес мастерской: г. Уфа </p>
            <p>ул.Индустриальное шоссе 112/1</p>
          </div>
          <div className="header-content-oneBlock img ">
            <div className="img-cont">
              <img src={WhatsApp} alt="" />
              <img src={Telegram} alt="" />    
            </div>
            <p className="modila">Задайте вопрос, мы онлайн</p>
          </div>
          <label  className="burger " for="burger">
            <input onClick={OpenHeader} type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="header-content-oneBlock modila">
            <p>Звоните Пн-Сб: 9:00 - 20:00</p>
            <h3>+7 (922) 202-12-20</h3>
            <a href="">Заказать звонок</a>
          </div>
        </div>
        <nav >
          <ul className='ulList'>
            {NavLink.map((value) => (
              <li>
                <a href="">{value}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
