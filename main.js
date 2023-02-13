
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
   showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
   showSlides(slideIndex -= 1);  
}

/* Функция перелистывания */
function showSlides(n) {
   let slides = document.getElementsByClassName("item");
   
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }

   /* Проходим по каждому слайду в цикле for */
   for (let slide of slides) {
      slide.style.display = "none";
   }   
   slides[slideIndex - 1].style.display = "block"; 
}

/* Меняем цвет кнопок при наведении*/
document.querySelector('.previous').addEventListener('mouseover', (event) => {
   const { target } = event;
   target.classList.add('onHoverColor');
});
document.querySelector('.next').addEventListener('mouseover', (event) => {
   const { target } = event;
   target.classList.add('onHoverColor');
});

document.querySelector('.previous').addEventListener('mouseout', (event) => {
   const { target } = event;
   target.classList.remove('onHoverColor');
});
document.querySelector('.next').addEventListener('mouseout', (event) => {
   const { target } = event;
   target.classList.remove('onHoverColor');
});

/* Меняем цвет кнопок при нажатии*/
document.querySelector('.previous').addEventListener('mousedown', (event) => {
   const { target } = event;
   target.classList.add('onCkickColor');
   previousSlide();
});
document.querySelector('.next').addEventListener('mousedown', (event) => {
   const { target } = event;
   target.classList.add('onCkickColor');
   nextSlide();
});

document.querySelector('.previous').addEventListener('mouseup', (event) => {
   const { target } = event;
   target.classList.remove('onCkickColor');
});
document.querySelector('.next').addEventListener('mouseup', (event) => {
   const { target } = event;
   target.classList.remove('onCkickColor');
});


