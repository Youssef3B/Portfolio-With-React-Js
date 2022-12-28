import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import $ from 'jquery';


const checkSize = () => {
  if ($(window).width() < 992) {
    $("nav").removeClass("position-fixed")
    $("nav").css("min-width", "250px")
    $('.link_nav a').on("click", () => {
      $(".navbar-collapse").removeClass("show");  
      $(".navbar-toggler").addClass("collapsed");
    })    
  } else if ($(window).width() < 1590) {
    $("nav").addClass("position-fixed")
    $("nav").css("min-width", "250px")
  }  else {
    $("nav").addClass("position-fixed")
    $("nav").css("min-width", "317px")
  }
}
checkSize()

$(window).on("resize", function() {
  checkSize()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
