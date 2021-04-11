'use strict'

 //табы
function tab() {

    let tabNav = document.querySelectorAll(".tabs-nav__item");
    let tabContent = document.querySelectorAll(".tab");
    let tabName;
  
    tabNav.forEach((item) => item.addEventListener("click", selectTabNav));

    function selectTabNav() {
      tabNav.forEach((item) => item.classList.remove("is-active"));

      this.classList.add("is-active");
      tabName = this.getAttribute("data-tab-name");
      selectTabContent(tabName);
    }

    function selectTabContent(tabName){
      tabContent.forEach((item)=> item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active"))
    }
  };
tab();




//фильтр
function cards () {
  let buttons = document.querySelectorAll(".item_amazing");
  let cards = document.querySelectorAll(".item_img_amazing");

  function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category) && category !== "all";

        if (isItemFiltered) {
          item.style.display = "none"
        } else {
          item.style.display = "block"
        }
      });
    }
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const curentCategory = button.dataset.filter;
        filter(curentCategory, cards);
      });
    });

const cardsServer = [
  {
    category: "item_img_amazing wordpress",
    serverImage: "./img/img_filter_server/wordpress1.jpg",
    title: "Wordpress",
    text: "Wordpress",
  },
  {
    category: "item_img_amazing wordpress",
    serverImage: "./img/img_filter_server/wordpress2.jpg",
    title: "Wordpress",
    text: "Wordpress",
  },
  {
    category: "item_img_amazing graphic_design",
    serverImage: "./img/img_filter_server/graphic-design1.jpg",
    title: "Graphic Design",
    text: "Graphic Design",
  },
  {
    category: "item_img_amazing graphic_design",
    serverImage: "./img/img_filter_server/graphic-design2.jpg",
    title: "Graphic Design",
    text: "Graphic Design",
  },
  {
    category: "item_img_amazing graphic_design",
    serverImage: "./img/img_filter_server/graphic-design3.jpg",
    title: "Graphic Design",
    text: "Graphic Design",
  },
  {
    category: "item_img_amazing graphic_design",
    serverImage: "./img/img_filter_server/graphic-design4.jpg",
    title: "Graphic Design",
    text: "Graphic Design",
  },
  {
    category: "item_img_amazing graphic_design",
    serverImage: "./img/img_filter_server/graphic-design5.jpg",
    title: "Graphic Design",
    text: "Graphic Design",
  },
  {
    category: "item_img_amazing landing_page",
    serverImage: "./img/img_filter_server/landing-page1.jpg",
    title: "Landing Pages",
    text: "Landing Pages",
  },
  {
    category: "item_img_amazing landing_page",
    serverImage: "./img/img_filter_server/landing-page2.jpg",
    title: "Landing Pages",
    text: "Landing Pages",
  },
  {
    category: "item_img_amazing landing_page",
    serverImage: "./img/img_filter_server/landing-page3.jpg",
    title: "Landing Pages",
    text: "Landing Pages",
  },
  {
    category: "item_img_amazing web_design",
    serverImage: "./img/img_filter_server/web-design1.jpg",
    title: "Web Design",
    text: "Web Design",
  },
  {
    category: "item_img_amazing web_design",
    serverImage: "./img/img_filter_server/web-design2.jpg",
    title: "Web Design",
    text: "Web Design",
  },
];

  const btn = document.querySelector(".button");

  btn.addEventListener("click", function () {
    cardsServer.forEach((card) => {
      document.querySelector(
        ".list_img_amazing"
      ).innerHTML += `<li class="${card.category}"><img src="${card.serverImage}" alt="${card.title}" class="img_amazing" width="285px" height="100%">
      <div class="amazing_element">
          <div class="amazing_element_content">
              <a href="#void" class="link_amazing_element"><img src="./img/link.svg" alt="link" class="img_amazing_element"></a>
              <a href="#void" class="link_amazing_element"><img src="./img/link.svg" alt="link" class="img_amazing_element"></a>
              <h3 class="title_amazing_element">${card.title}</h3>
              <p class="text_amazing_element">${card.text}</p>
          </div>
      </div>
      </li>`;
      btn.remove();
      cards = document.querySelectorAll(".item_img_amazing");
    });
  });
}
cards ();



function slider() {
  const arrowPrev = document.querySelector(".arrow-prev");
  const arrowNext = document.querySelector(".arrow-next");
  const slides = document.querySelectorAll(".slider_item");
  const dots = document.querySelectorAll(".reviews-slider_container");
  let currentIndex = 1;
  
  function selectTabContent(person) {
    slides.forEach(item => activeRemove(item, person));
  };

  function activeRemove(item, className) {
    return item.classList.contains(className) ? item.classList.add("active") : item.classList.remove("active");
  };

  function createSlider() {
    dots.forEach(item => item.addEventListener("click", selectTabBtns));

    function selectTabBtns() {
        dots.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
        currentIndex = Number(this.dataset.person.split("-")[1]);
        selectTabContent(this.dataset.person);
    };

    showSlides(currentIndex);

    function nextSlide() {
        showSlides(currentIndex += 1);
    }

    function previousSlide() {
        showSlides(currentIndex -= 1);
    }

    function showSlides(n) {
        if (n > dots.length) currentIndex = 1;
        if (n < 1) currentIndex = dots.length;
        for (let slide of dots) slide.classList.remove("active");
        dots[currentIndex - 1].classList.add("active");
        selectTabContent(dots[currentIndex - 1].dataset.person);
    }

    arrowNext.addEventListener("click", nextSlide);
    arrowPrev.addEventListener("click", previousSlide);
  };
  createSlider();
  }
slider();