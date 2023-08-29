// бугрер меню
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navigation = nav?.querySelectorAll("a");
// откртие закрытие на бургер
burger?.addEventListener("click" , () => {
   burger?.classList.toggle("burger--active");
   nav?.classList.toggle("navbutton--visibl") ;
});

navigation.forEach(el => {
    el.addEventListener("click", () => {
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navbutton--visibl");   
    })
});

//Закрытие на ecp и вне блока 
window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navbutton--visibl");   
    }
  })

window.addEventListener("click", function(event){
    if (!event.target.classList.contains("burger--active") && !event.target.closest(".navbutton")) {
      burger?.classList.remove("burger--active");
      nav?.classList.remove("navbutton--visibl");    
    } 
  });



// кнопка не активная до регистрации  
const btn = document.querySelector('.button-check-card');
btn.setAttribute('disabled', '');



// слайдер 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  

  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 25,
        
    },
    895: {
        slidesPerView: 2,
        spaceBetween: 25,    
    },
    1345: {
        slidesPerView: 3,
        spaceBetween: 25,
    }
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});



// Секция фоворит