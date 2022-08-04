import "./index.html";
import "./index.scss";

const burger = document.querySelector("#burger");
const sideBar = document.querySelector("#sidebar");
const sideBarBody = document.querySelector(".sidebar__body");
const menu = document.querySelector(".header__menu");
const social = document.querySelector(".social__messanger");
const body = document.body;
const btnRedirect = document.querySelector('.btn').cloneNode(1);
const close = document.querySelectorAll('#closed');
const phone = document.querySelector(".footer__company-link");
const formPopup = document.querySelector('#popup__form-mobile');
const popup = document.querySelector('.questions__input').cloneNode(1);

burger.addEventListener("click", openSideBar);
btnRedirect.addEventListener('click', popupForm);

function openSideBar(e) {
  e.preventDefault();
  sideBar.classList.toggle("open");
  body.classList.toggle("noscroll");

  sideBarBody.appendChild(menu);
  sideBarBody.appendChild(social);
  sideBarBody.appendChild(phone);
  sideBarBody.appendChild(btnRedirect);
    btnRedirect.addEventListener('click', (e) => {
        e.preventDefault();
        sideBarBody.classList.remove("open");
    })
}


// if(close.length > 0){
//     for(let i=0; i< close.length; i++){
//         const el = close[i];
//         el.addEventListener('click', (e) => {
//             close(el.closest('.popup'));
//             e.preventDefault();
//         })
//     }
// }

function btnClose(e){
    e.preventDefault();
    sideBar.classList.remove("open");
    body.classList.remove("noscroll");
    formPopup.classList.remove("open-popup");
  
}

function popupForm(e){
    e.preventDefault();
    sideBar.classList.remove("open");
    formPopup.classList.toggle("open-popup");
    formPopup.appendChild(popup);
    btnClose();
}

close.addEventListener('click', btnClose);


