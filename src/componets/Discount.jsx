import '../css/Discound.css';

export default function Discound() {
  return (
    <section data-aos="fade-up" className="discound">
      <div className="container">
        <div className="discound-cont">
          <div className="discound-1">
            <h1>СКИДКА</h1>
            <h3>ОТПРАВЬТЕ ЗАЯВКУ ЧЕРЕЗ САЙТ И ПОЛУЧИТЕ <strong>СКИДКУ 10%</strong></h3>
            <input placeholder='+7 (___) ___ -__-__' type="tel" />
            <div className="discound-btn">
            Отправить     
            </div>
          </div>
          <div className="discound-2">
            <img src="img/image 44.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
