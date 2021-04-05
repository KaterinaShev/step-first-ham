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
        const isItemFiltered =
          !item.classList.contains(category) && category !== "all";

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
cards ()

//слайдер
$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
    });
});


