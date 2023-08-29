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


//ЭТАП 1!


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
  // кнопки
const labelWinter = document.querySelector('.label-season-winter')
const labelSpring = document.querySelector('.label-season-Spring')
const labelSummer = document.querySelector('.label-season-summer')
const labelAutumn = document.querySelector('.label-season-autumn')
  //книги сезонов
const bookWinter = document.querySelector('.winter-book-list')
const bookSpring = document.querySelector('.spring-book-list')
const bookSummer = document.querySelector('.summer-book-list')
const bookAutumn = document.querySelector('.autumn-book-list')

// Функции 
labelWinter?.addEventListener("click" , () => {
  bookWinter?.classList.add("book-active");
  setTimeout(() => {
    bookWinter?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelSpring?.addEventListener("click" , () => {
  bookSpring?.classList.add("book-active");
  setTimeout(() => {
    bookSpring?.classList.add("active");
  }, 0);
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelSummer?.addEventListener("click" , () => {
  bookSummer?.classList.add("book-active");
  setTimeout(() => {
    bookSummer?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelAutumn?.addEventListener("click" , () => {
  bookAutumn?.classList.add("book-active");
  setTimeout(() => {
    bookAutumn?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
});



// ЭТАП 2 


// Меню авторизации при нажатии на иконку пользователя

   //открытие меню и закритие на иконку
const buttonProfile = document.querySelector('.profil')
const dporMenuProfile = document.querySelector('.drop-menu-profile')

buttonProfile?.addEventListener("click" , () => {
  dporMenuProfile?.classList.toggle("menu-active");
});
  //закрытие на другие части сайта
  window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
      dporMenuProfile?.classList.remove("menu-active");
    }
  })

  document.addEventListener("click", function(event) {
    const targetElement = event.target;
  if (!targetElement.closest('.profil') && !targetElement.closest('.drop-menu-profile')) {
      dporMenuProfile?.classList.remove("menu-active");
    }
  });

