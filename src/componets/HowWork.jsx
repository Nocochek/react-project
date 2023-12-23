import '../css/HowWork.css';

export default function HowWork() {
  return (
    <section data-aos="fade-up" className="HowWork">
      <div className="container">
        <h1>Как мы умеем делать</h1>
        <div className="HowWork-content">
          <img src="img/swipe.png" alt="" />
          <div className="HowWork-item">
            <h4>СТУЛ КУХОННЫЙ</h4>
            <h5>Вид работ: </h5>
            <p>замена обивки стула</p>    
            <h5>Использованные материалы:</h5>
            <p>экокожа цвет слоновая кость</p>
            <div className="HowWork-footer">
              <p>
                Описание работы - сроки - место выполнения (проведения) можно добавить еще и отзыв
                клиенты или видеообзор сюда же
              </p>
              <div className="two-block">
                <p className="cost">Итоговая стоимость:</p>
                <h6>900 руб.</h6>
              </div>      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
