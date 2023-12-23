import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componets/Header';
import Intro from './componets/Intro';
import Items from './componets/Items';
import Services from './componets/Services';
import Cost from './componets/Cost';
import Discount from './componets/Discount';
import Block from './componets/Block';
import HowWork from './componets/HowWork';
import HowDo from './componets/HowDo';
import Stocks from './componets/Stocks';
import Cloth from './componets/Сloth';
import Contacts from './componets/Contacts';
import Footer from './componets/Footer';


import './css/index.css';
import './css/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Items />
    <Services />
    <HowWork />
    <Cost />
    <Discount />
    <Block />
    <section className="discound">
      <div className="container">
        <div className="discound-cont">
          <div className="discound-1  ">
            <h1 className="discound-title">БЕСПЛАТНЫЙ ВЫЕЗД ДИЗАЙНЕРА-ЗАМЕРЩИКА</h1>
            <h3>Для консультации и подбора материала в удобное для Вас время </h3>
            <input placeholder="+7 (___) ___ -__-__" type="tel" />
            <div className="discound-btn">
              <p className='discound-btn-text'> Вызвать замерщика</p>
            </div>
          </div>
          <div className="discound-2">
            <img className="img-disc" src="img/image 49.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <HowDo/>
    <Stocks/>
    <Cloth/>
    <Contacts/>
    <Footer/>

  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
