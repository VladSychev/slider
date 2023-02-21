let slides = [
{
   img_path: "./img/1.jpg",
   title: "slide 1"
},
{
   img_path: "./img/2.jpg",
   title: "slide 2"
},
{
   img_path: "./img/3.jpeg",
   title: "slide 3"
},
{
   img_path: "./img/4.jpg",
   title: "slide 4"
},
{
   img_path: "./img/5.jpg",
   title: "slide 5"
}
];

if (slides.length === 0) {
   let sliderLine = document.querySelector(".slider");
   sliderLine.innerHTML = '<p class = "output-error">Здесь был Слайдер!</p>';
} else {

   let slidesNew = [];
   let dots = [];
   let slider = document.querySelector(".slider__wrapper");
   let allDots = document.querySelector(".all-dots");

   /* Создаем картинки */
   for (let i = 0; i < slides.length; i++) {

      /* Создание img и tittle */
      let imgPath = slides[i].img_path;
      let title = slides[i].title;
      let div = document.createElement("div");
      let img = document.createElement("img");
      let span = document.createElement("span");
      span.textContent = title;
      img.src = imgPath;
      let divElement = slider.appendChild(div);
      divElement.classList.add("item");
      let tittleElement = divElement.appendChild(span);
      tittleElement.classList.add("tittle");
      divElement.appendChild(img);
      slidesNew.push(divElement);

      /* Создание dots */
      let aDot = document.createElement("a");
      let dot = allDots.appendChild(aDot); 
      dot.classList.add("dot");
      
      /* Адаптация слайдера */
      let images = document.querySelectorAll(".item img");
      let width;

      function init() {
         width = document.querySelector(".slider").offsetWidth;
         slider.style.width = width * images.length + 'px';
         images.forEach( item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
         });
      }
      init();
   }
   window.addEventListener('resize', init);

   /* Устанавливаем индекс слайда по умолчанию */
   let slideIndex = 1;
   showSlides(slideIndex);

   /* Увеличиваем индекс на 1 — показываем следующий слайд*/
   function nextSlide() {
      showSlides((slideIndex += 1));
   }

   /* Уменьшает индекс на 1 — показываем предыдущий слайд*/
   function previousSlide() {
      showSlides((slideIndex -= 1));
   }

   /* Функция перелистывания */
   function showSlides(n) {

      slidesNew = document.getElementsByClassName("item");
      dots = document.getElementsByClassName("dot");

      if (n > slidesNew.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slidesNew.length;
      }
   /* Проходим по каждому слайду в цикле for */
      for (let slide of slidesNew) {
         slide.style.display = "none";
      }
      slidesNew[slideIndex - 1].style.display = "block";
      /* Проходим по каждой точке в цикле for */
      for (i = 0; i < dots.length; i++) {
         dots[i].classList.remove("dot-active");
      }
      dots[slideIndex - 1].classList.add("dot-active");
   }
   /* Считываем событие клика по кнопке и перелистываем слайд*/
   document.querySelector(".previous").addEventListener("click", () => {
      previousSlide();
   });
   document.querySelector(".next").addEventListener("click", () => {
      nextSlide();
   });

   /* Считываем событие клика по точке и перелистываем слайд*/
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', () => {
         slideIndex = i + 1;
         showSlides(slideIndex);
      })
   };
}

