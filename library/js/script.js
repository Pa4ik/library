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

//модалка регистрации 
const btnRegisterProfile = document.querySelector('.button-rigister-profile')
const menuRegistr = document.querySelector('.modal-register')
const closeRegistr = document.querySelector('.close-register')
const btnSingUp = document.querySelector ('.button-sing-up')

btnRegisterProfile?.addEventListener("click" , () => {
  menuRegistr?.classList.toggle("menu-active");
  dporMenuProfile?.classList.remove("menu-active");
  closeRegistr?.classList.remove("menu-active");
});

btnSingUp?.addEventListener("click", () =>{
  menuRegistr?.classList.toggle("menu-active");
})

window.addEventListener ("keydown", function(event){
  if (event.keyCode === 27){
    menuRegistr?.classList.remove("menu-active");
  }
})

closeRegistr.addEventListener('click' , () =>{
  menuRegistr?.classList.remove("menu-active");
})

window.addEventListener('click', (event) => {
  if (event.target === menuRegistr) {
    menuRegistr?.classList.remove('menu-active');
  }
});


                // Проверка регистрации 

 // проверка на пустоту
  
// Получить все элементы input
const inputs = document.getElementsByClassName("input-register-modal");
const errorSpans = document.getElementsByClassName("fill-error");
const signUpButton = document.querySelector(".btn-rigister-profile");

// Отслеживать событие нажатия на кнопку Sign Up
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      errorSpans[i].classList.add("show-error");
    } else {
      errorSpans[i].classList.remove("show-error");
    }
  }
});

// Отслеживать событие ввода в поля ввода и удалять класс show-error
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    errorSpans[i].classList.remove("show-error");
  });
}


  // Проверка name 
    //проверка на длину 
const nameInputs = document.querySelectorAll('.input-register-modal');

nameInputs.forEach(input => {
  input.addEventListener('input', () => {
    const nameError = input.parentNode.querySelector('.name-error');
    if (input.value.length < 3 && input.value.length > 0) {
      nameError.classList.add('show-error');
    } else {
      nameError.classList.remove('show-error');
    }
  });
});


      //проверка емайла на правильность ввода 
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.getElementById('email');
const errorInput = document.querySelector(".email-error")

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function toggleError(isValid) {
  if (input.value.trim() === '') {
    errorInput.classList.remove('show-error');
  } else {
    if (isValid) {
      errorInput.classList.remove('show-error');
    } else {
      errorInput.classList.add('show-error');
    }
  }
}

function onInput() {
  const value = input.value.trim();
  toggleError(isEmailValid(value));
}

input.addEventListener('input', onInput);


// проверка пасс на длину 

const passwordInput = document.querySelectorAll('.input-register-modal');
const passErrorElement = document.querySelector('.pass-error');

// Функция для проверки пароля 

nameInputs.forEach(input => {
  input.addEventListener('input', () => {
    const passError = input.parentNode.querySelector('.pass-error');
    if (input.value.length <= 8 && input.value.length > 0) {
      passError.classList.add('show-error');
    } else {
      passError.classList.remove('show-error');
    }
  });
});

//сохранения данных  localStorage

 
document.querySelector('.btn-rigister-profile').addEventListener('click', function(e) {
  e.preventDefault(); // отменяем отправку формы

// Получаем значения полей ввода
  const firstName = document.querySelector('.input-register-modal:nth-of-type(1)').value;
  const lastName = document.querySelector('.input-register-modal-2').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('.input-register-modal[type="password"]').value;

// Проверяем, есть ли пустые поля
  if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
    // Проверяем, нет ли ошибок введенных данных
    if (!document.querySelector('.name-error.show-error') && !document.querySelector('.email-error.show-error') && !document.querySelector('.pass-error.show-error')) {
      // Сохраняем значения в localStorage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      // Генерируем случайный номер карты
      const cardNumberHex = generateCardNumber();
      // Сохраняем сгенерированный номер карты в localStorage
      localStorage.setItem('cardNumber', cardNumberHex);    
      // сохраняем книги 
      localStorage.setItem('userBooks', 0);
      //сохраняем заходов 
      localStorage.setItem('userVisits', 0);
      //  Перенаправляем на другую страницу или делаем другую логику
      location.reload();
    }
  }
});

function generateCardNumber() {
  // Сгенерировать случайное девятизначное число
  let randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
  // Сконвертировать число в 16-ричную систему
  let cardNumberHex = randomNumber.toString(16).toUpperCase();
  // Добавить нули в начало, чтобы получить 9-значное число
  while (cardNumberHex.length < 9) {
    cardNumberHex = "0" + cardNumberHex;
  }
  return cardNumberHex;
} 



//Иконка пользователя меняется на заглавные буквы имени
//Достаем элементы 
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');

//Берем первый буквы
const firstNameInitial = firstName.charAt(0);
const lastNameInitial = lastName.charAt(0);

console.log(`${firstNameInitial}${lastNameInitial}`);





   // Этап 3 

   //модалка регистрации 
const btnloginProfile = document.querySelector('.button-log-in-profile')
const menulogin = document.querySelector('.modal-login')
const closeLogin = document.querySelector('.close-login')
const btnLogin = document.querySelector ('.button-log-in')

btnloginProfile?.addEventListener("click" , () => {
  menulogin?.classList.toggle("menu-active");
  dporMenuProfile?.classList.remove("menu-active");
  closeLogin?.classList.remove("menu-active");
});

btnLogin?.addEventListener("click", () =>{
  menulogin?.classList.toggle("menu-active");
})

window.addEventListener ("keydown", function(event){
  if (event.keyCode === 27){
    menulogin?.classList.remove("menu-active");
  }
})

closeLogin.addEventListener('click' , () =>{
  menulogin?.classList.remove("menu-active");
})

window.addEventListener('click', (event) => {
  if (event.target === menulogin) {
    menulogin?.classList.remove('menu-active');
  }
});

// открытие логина на покупке книг 
const loginByuBook = document.querySelectorAll(".buy-book")

loginByuBook?.forEach(button => {
  button.addEventListener("click", () =>{
    menulogin?.classList.toggle("menu-active");
  })
})


// переглючения модалок рег и лог 
const btnReg = document.querySelector(".btn-register")
const btnLog = document.querySelector(".btn-login")

btnReg?.addEventListener("click" , () => {
  menuRegistr?.classList.toggle("menu-active");
  menulogin?.classList.remove("menu-active");
});

btnLog?.addEventListener("click" , () => {
  menulogin?.classList.toggle("menu-active");
  menuRegistr?.classList.remove("menu-active");
});

//проверка инпутов логин 

//проверка на пустоту
// Получить все элементы input
const inputsLogin = document.getElementsByClassName("input-login-modal");
const errorSpansLogin = document.getElementsByClassName("fill-error-log");
const logInButton = document.querySelector(".btn-login-profile");

// Отслеживать событие нажатия на кнопку Sign Up
logInButton.addEventListener("click", function(event) {
  event.preventDefault();

  for (let i = 0; i < inputsLogin.length; i++) {
    if (inputsLogin[i].value.trim() === "") {
      errorSpansLogin[i].classList.add("show-error");
    } else {
      errorSpansLogin[i].classList.remove("show-error");
    }
  }
});

// Отслеживать событие ввода в поля ввода и удалять класс show-error
for (let i = 0; i < inputsLogin.length; i++) {
  inputsLogin[i].addEventListener("input", function() {
    errorSpansLogin[i].classList.remove("show-error");
  });
}

// проверка на верность логина
