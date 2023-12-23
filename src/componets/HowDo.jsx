import '../css/HowDo.css';

export default function HowDo() {
  return (
    <section data-aos="fade-up" className="HowDo">
      <div className="container">
        <h1>Как мы работаем</h1>
        <div className="HowDo-cont">
          <div className="HowDo-block">
            <div className="HowDo-header">
              <img src={'img/icon/calendar-4 1.svg'} alt="" />
              <p>СРОКИ</p>
            </div>
            <h6>Перетяжка займет от 2 до 10 дней</h6>
            <div className="HowDo-item">
              <img src={'img/icon/check-21 1.svg'} alt="" />
              <p>
                Сроки зависят от сложности конструкции и пошива, а так же от размера и дизайна
                мебели
              </p>
            </div>
            <div className="HowDo-item">
              <img src={'img/icon/check-21 1.svg'} alt="" />
              <p>
                Сроки уточняются и прописываются при составлении и подписании договора на оказание
                услуг
              </p>
            </div>
            <div className="HowDo-item">
              <img src={'img/icon/check-21 1.svg'} alt="" />
              <p>Мы делаем скидку в размере 1% за каждый день просрочки</p>
            </div>
            <div className="HowDo-item">
              <img src={'img/icon/check-21 1.svg'} alt="" />
              <p>В среднем сроки выполнения работ варьируются от 2-х до 10-ти дней</p>
            </div>
            <div className="HowDo-item">
              <img src={'img/icon/check-21 1.svg'} alt="" />
              <p>
                Мы работаем “под ключ”: от Вас только требуется выбрать материал обивки, согласовать
                работы и сроки, а всё остальное Мы сделаем сами
              </p>
            </div>

            <button>Узнать точные сроки</button>
          </div>
          <div className="HowDo-block">
            <div className="content-2">
              <div className="content-item">
                <div className="numder">1</div>
                <div className="content-2-text">
                  <h3>ОСТАВЛЯЕТЕ ЗАЯВКУ</h3>
                  <h4>
                    В течении 15 минут мы свяжется с Вами и проконсультируем по Вашей заявке. Затем
                    согласуем с Вами место и время встречи для осмотра мебели и выбора материала
                  </h4>
                </div>
              </div>
              <div className="content-item">
                <div className="numder">2</div>
                <div className="content-2-text">
                  <h3>ВЫЕЗД ЗАМЕРЩИКА</h3>
                  <h4>
                    В удобное вам время (днем, после работы, в ваш выходной) к вам приедет замерщик.
                    Он осмотрит мебель и покажет вам вживую разные образцы ткани. После согласования
                    работ, материала и стоимости заключаем договор.
                  </h4>
                </div>
              </div>
              <div className="content-item">
                <div className="numder">3</div>
                <div className="content-2-text">
                  <h3>разбор, упаковка и забор мебели </h3>
                  <h4>
                    В удобное вам время приезжает бригада мастеров, разбирает, бережно упаковывает и
                    вывозит вашу мебель в мастерскую БЕСПЛАТНО. По желанию Заказчика также призводим
                    все работы на дому
                  </h4>
                </div>
              </div>
              <div className="content-item">
                <div className="numder">4</div>
                <div className="content-2-text">
                  <h3>выполнение работ</h3>
                  <h4>
                    Работы мы выполняем в нашей мастерской (1-2 дня, если ткань в наличии, до 10
                    дней если заказываем у поставщика). Шьем новые чехлы, меняем наполнитель,
                    смазываем и ремонтируем и меняем механизмы.
                  </h4>
                </div>
              </div>
              <div className="content-item">
                <div className="numder">5</div>
                <div className="content-2-text">
                  <h3>Доставка, подъем, сборка</h3>
                  <h4>
                    Вернем вашу обновленную мебель к вам домой. Бережно упаковываем ее в цеху,
                    везем, заносим к вам на этаж и сами ее собираем. Вам нужно только открыть нам
                    дверь и радоваться обновленной мебели!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
