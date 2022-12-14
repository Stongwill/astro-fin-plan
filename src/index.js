import "./index.html";
import "./index.scss";

const burger = document.querySelector("#burger");
const sideBar = document.querySelector("#sidebar");
const sideBarBody = document.querySelector(".sidebar__body");
const menu = document.querySelector(".header__menu").cloneNode(1);
const social = document.querySelector(".social__messanger").cloneNode(1);
const body = document.body;
const btnRedirect = document.querySelector(".btn");
const close = document.querySelector(".closed");
const phone = document.querySelector(".footer__company-link");
const formPopup = document.querySelector("#popup__form-mobile");
const popup = document.querySelector(".questions__input").cloneNode(1);

burger.addEventListener("click", openSideBar);
btnRedirect.addEventListener("click", popupForm);
close.addEventListener("click", btnClose);

// Функция открывающая sidebar
function openSideBar(e) {
  sideBar.classList.toggle("open");
  body.classList.toggle("noscroll");
  sideBar.addEventListener("click", (e) => {
    if (!e.target.closest(".sidebar__body")) {
      sideBar.classList.remove("open");
      body.classList.remove("noscroll");
    }
    e.preventDefault();
  });
  sideBarBody.append(menu, social, phone, btnRedirect);
}

//Функция закрытия формы
function btnClose() {
  if (sideBar.classList.contains("open")) {
    sideBar.classList.remove("open");
    body.classList.remove("noscroll");
  }
}

// Удаление якоря, если размер экрана <= 1240
if (window.innerWidth <= 1240) {
  document.getElementById("questions").id = "";
}

//Функция открывающая popup-форму - "Оставить заявку"
function popupForm(e) {
  if (sideBar.classList.contains("open")) {
    sideBar.classList.toggle("open");
  }
  formPopup.classList.toggle("open-popup");
  formPopup.append(popup, close.cloneNode(1));

  formPopup.addEventListener("click", (e) => {
    if (!e.target.closest(".questions__input")) {
      formPopup.classList.remove("open-popup");
      body.classList.remove("noscroll");
    }
    e.preventDefault();
  });
}
