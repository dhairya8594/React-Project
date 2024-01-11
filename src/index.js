import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header/header';
import Druva from './home/druva';
import Page2 from './new-arr-sep-off/page2';
import Deal from './deal-end-off/deal';
import ImageSlider from './slider-off/ImageSlider';
import { SliderData } from './slider-off/SliderData';
import Footer from './footer/footer';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Druva/>
    <Page2/>
    <Deal/>
    <ImageSlider slides={SliderData} />
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
