import '../css/stocks.css';

export default function Stocks() {
  return (
    <section data-aos="fade-up" className="stocks">
      <div className="container">
        <h1>Акции и скидки</h1>
        <div className="stocks-content">
          <div className="stocks-item">
            <div className="stocks-item-header">
              <h2>Две подушки 40х40 в подарок!</h2>
              <img
                src="img/png-transparent-throw-pillows-cushion-material-pillow-furniture-throw-pillow-materialphotoAid-removed-background 1.png"
                alt=""
              />
            </div>
            <p>При заказае обтяжки дивана, две подушки из выбранного вами материала в подарок!</p>
            <button>Участвовать в акции</button>
          </div>
          <div className="stocks-item">
            <div className="stocks-item-header">
              <h2>Скидка на день рождения -10%</h2>
              <img src="img/image 50.png" alt="" />
            </div>
            <p>
              Скидка на День Рождение 5 дней до и 5 дней после. Покажите ваш документ при заключении
              договора и получите скидку 10%
            </p>
            <button>Получить скидку</button>
          </div>
          <div className="stocks-item">
            <div className="stocks-item-header">
              <h2>Скидка -5% пенсионерам</h2>
              <img src="img/Снимок экрана 2023-09-22 в 13.30 1.png" alt="" />
            </div>       
            <p>
              Покажите специалисту пенсионное удостоверение при заключении договора и получите
              скидку -5%
            </p>
            <button>Получить скидку</button>
          </div>
        </div>
      </div>
    </section>
  );
}
