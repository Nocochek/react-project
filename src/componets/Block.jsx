import '../css/block.css';

function BlockItem(props) {
  return (
    <div data-aos="fade-up" className="BlockItem">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default function Block() {
  return (
    <section data-aos="fade-up" className="block">
      <div className="container">     
        <h1>Вы можете нам довериться и быть спокойны за качество и сроки </h1>
        <div className="block-content">
          <BlockItem
            img={'img/icon/document-7 1.svg'}
            text={
              'Составляем договор, закрепляем договором стоимость услуг, сроки выполнения работ, гарантии на выполненную работу'
            }
            title={'Заключаем договор'}
          />
          <BlockItem
            img={'img/icon/quality-4 1.svg'}
            text={
              'Всё работы выполняются опытными мастерами и при помощи профессионального оборудования в результате достигается высокое качество'
            }
            title={'Фабричное качество'}
          />
          <BlockItem img={'img/icon/delivery-truck-7 1.svg'} text={'Самостоятельно транспортируем вашу мебель, относимся к ней бережено. Спустим и поднимем мебель, даже если вы на 12 этаже'}
            title={'Бесплатная доставка'}
          />
          <img className='document' src="img/Rectangle 500.svg" alt="" />
        </div>
        <div className="block-content">
          <BlockItem
            img={'img/icon/shield-19 1.svg'}
            text={
              'Гарантия на выполненные работы 18 месяцев, при необходости позвоните нам мы приедем и исправим недостатки за свой счет'
            }
            title={'Гарантия 18 месяцев'}
          />
          <BlockItem
            img={'img/icon/color-palette 1.svg'}
            text={
              'Огромный выбор тканей на любой вкус от известных брендов-производителей. Мы покупаем ткани по оптовым ценам и не делаем наценки'
            }
            title={'Более 300 видов тканей '}
          />
          <BlockItem
            img={'img/icon/work-paper-2 1.svg'}
            text={
              'Мы на рынке ремонта  мебели с 2012 года и 99% наших клиентов остались довольны и возвращаются к нам снова и советуют нас друзьям'
            }
            title={'Опыт работы с 2012 года'}
          />
          <BlockItem
            img={'img/icon/shield-20 1.svg'}
            text={
              'Заключаем договор на оказание услуг, оказываем  услуги для физических и юридических лиц'
            }
            title={'Гарантии по договору'}
          />
        </div>
      </div>
    </section>
  );
}
