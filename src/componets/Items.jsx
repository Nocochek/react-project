import '../css/items.css';
function Items() {
  return (
    <div className="container">
      <div className="IntroItems">
        <div data-aos="fade-up" className="IntroItem">
          <img src="img/money-26 1.svg" alt="" />
          <p><strong>Фиксируем цену в договоре</strong> цена закрепляется в договоре и не меняется </p>
        </div>
        <div data-aos="fade-up" className="IntroItem">
          <img src="img/delivery-tracking 1.svg" alt="" />
          <p><strong>Бесплатная доставка</strong> мебели до мастерской и обратно</p>
        </div>
        <div data-aos="fade-up" className="IntroItem">
          <img src="img/money-security 1.svg" alt="" />
          <p><strong>Цены ниже рыночных</strong> найдете где дешевле, сделаем скидку</p>
        </div>
        <div data-aos="fade-up" className="IntroItem">
          <img src="img/vector.svg" alt="" />
          <p><strong>Гарантия 18 месяцев</strong> контроль качества перетяжки на каждом этапе </p>
        </div>
      </div>
    </div>
  );
}

export default Items;
