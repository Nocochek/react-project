import '../css/Intro.css';

function Intro() {
  return (
    <section data-aos="fade-up" className="intro" >
      <div className="container">
       <div className="intro-content">
       <div className="intro-header">
          <h1 className="title">Перетяжка ремонт и реставрация мебели в Уфе </h1>
          <div className="header-cont">
            <strong>“под ключ”</strong> срок выполнения от 2 дней с гарантией 18 месяцев{' '}
          </div>
        </div>
        <p className='intro-text'>
          Загрузите фото мебели, которой требуется ремонт или перетяжка, и узнайте стоимость работ.
        </p>
        <div className="intro-btn">
            <img src="img/photo-2 1.svg" alt="" />
            <p>Рассчет стоимости по фото</p>
        </div>
       </div>



     
      </div>
    </section>
  );
}
export default Intro;
