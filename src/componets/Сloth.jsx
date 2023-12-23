import '../css/Cloth.css';

export default function Cloth() {
  return (
    <section data-aos="fade-up" className="cloth">
      <div className="container">
        <div className="header-cloth">
          <h1>Большой выбор тканей для вашей обивки</h1>
          <div className="cloth-item-head">
            <div className="cloth-item">
              <h2>ЗАКАЖИТЕ ПЕРЕТЯЖКУ МЕБЕЛИ ПРЯМО СЕЙЧАС</h2>
              <input placeholder="Ваше имя" type="text" />
              <input placeholder="+7(___) ___ -__-__" type="text" />
              <div className="btn-cloth">Отправить</div>
              <div className="footer-item-cloth">
                <div className="heart-container" title="Like">
                  <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
                  <div class="svg-container">
                    <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg
                      class="svg-celebrate"
                      width="100"
                      height="100"
                      xmlns="http://www.w3.org/2000/svg">
                      <polygon points="10,10 20,20"></polygon>
                      <polygon points="10,50 20,50"></polygon>
                      <polygon points="20,80 30,70"></polygon>
                      <polygon points="90,10 80,20"></polygon>
                      <polygon points="90,50 80,50"></polygon>
                      <polygon points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
                <p >Нажимая кнопку отправить вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>    
          </div>
        </div>
        <div className="cloth-2-container">
          <img className='bgc-cloth' src="img/image 23.png" alt="" />
          <p>
            У нас большой выбор материалов: как натуральных, так и искусственных, различных по
            фактуре, текстуре и цветовой гамме. Перед тем, как заключить с вами договор и начать
            перетягивать мебель мы всегда узнаем, имеются ли у вас животные, можем предложить ткань
            антикоготь, есть ли у вас дети - то можем предложить износостойкую, антивандальную или
            моющуюся ткань. В зависимости от ситуации советуем лучшие ткани для продления жизни
            мягкой мебели.
          </p>
        </div>
      </div>
    </section>
  );
}
