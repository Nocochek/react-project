import '../css/Services.css';

function ServicesItem(prop){
    return(
        <div data-aos="fade-up" className="services-item">
        <img src={prop.img} alt="" />
        <h4>{prop.text} </h4>
        <p className="cost-text">
          Стоимость работ<br></br>
          <strong> от 6000 руб</strong>
        </p>
        <div className="services-item-footer">
          <a className="services-link" href="">
            подробнее
          </a>
          <img className="right-arr" src='img/right-arrow-10 2.svg' alt="" />
        </div>
      </div>
    )
}
function Services() {
  return (
    <section data-aos="fade-up" className="services">
      <div className="container">
        <h1>Наши услуги</h1>
        <div className="services-header modila">
          <h3 className="services-headerText">перетяжка мебели</h3>
          <h3 className="services-headerText">Ремонт мебели</h3>
          <h3 className="services-headerText">обшивка мебели</h3>
          <h3 className="services-headerText">реставрация мебели</h3>
        </div>
        <div className="services-content">
       <ServicesItem text={'Перетяжка дивана'} img={'img/image 11.png'}/>
       <ServicesItem text={'Перетяжка кресел'} img={'img/image 19.png'} />
       <ServicesItem text={'Обшивка изголовья кровати'} img={'img/image 18.png'} />
       <ServicesItem text={'Перетяжка кухонного уголка'} img={'img/image 39.png'} />
        </div>
        <div className="services-content">
        <ServicesItem text={'Ремонт дивана'} img={'img/image 40.png'}  />
       <ServicesItem text={'Ремонт кресел'} img={'img/image 41.png'} />
       <ServicesItem text={'Ремонт стульев'} img={'img/image 42.png'} />
       <ServicesItem text={'Ремонт кожаного дивана'}  img={'img/image 43.png'}/>
        </div>
      </div>
      <button>Загрузить еще</button>
    </section>
  );
}
export default Services;
