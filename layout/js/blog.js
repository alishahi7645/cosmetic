var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}const login = document.querySelector(".login");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    login.classList.toggle("yes");
  } else {
    login.classList.remove("yes");
  }
});
const menu = document.querySelector(".menu");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    menu.classList.toggle("yes1");
  } else {
    menu.classList.remove("yes1");
  }
});
const logo = document.querySelector(".logo");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    logo.classList.toggle("yes2");
  } else {
    logo.classList.remove("yes2");
  }
});
const logoimg = document.querySelector(".logo-img");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    logoimg.classList.toggle("yes3");
  } else {
    logoimg.classList.remove("yes3");
  }
});

const search = document.querySelector(".search");
const btn = document.querySelector(".btns");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});

const shop = document.querySelector(".shop");
const shopping = document.querySelector(".shopping-cart");
const shopping1 = document.querySelector(".shopping-cart1");
const close = document.querySelector(".close");
const closeloginn1 = document.querySelector(".close-login1");
closeloginn1.addEventListener("click", function () {
  shop.classList.remove("shop1");
});
shopping.addEventListener("click", function () {
  shop.classList.add("shop1");
});
shopping1.addEventListener("click", function () {
  shop.classList.add("shop1");
});

close.addEventListener("click", function () {
  shop.classList.remove("shop1");
  loginsign.classList.remove("show");
});

const loginsign = document.querySelector(".login-sign");
const logshow = document.querySelector(".log");
const closelogin = document.querySelector(".close-login");
logshow.addEventListener("click", function () {
  loginsign.classList.add("show");
});
closelogin.addEventListener("click", function () {
  loginsign.classList.remove("show");
});
const signaccount = document.querySelector(".sign-account");
const loginsignin = document.querySelector(".login-sign-signin-items");
signaccount.addEventListener("click", function () {
  loginsignin.classList.toggle("show1");
  loginsign.classList.add("show");
});

const logaccount = document.querySelector(".log-account");
logaccount.addEventListener("click", function () {
  loginsignin.classList.remove("show1");
});
const closesign = document.querySelector(".closesign");
closesign.addEventListener("click", function () {
  loginsign.classList.remove("show");
});
const closeloginn = document.querySelector(".closelogin");
closeloginn.addEventListener("click", function () {
  loginsign.classList.remove("show");
});

const navbar12 = document.querySelector(".navbar");
const navbarchange = document.querySelector(".navbarchange");
const bottommenu = document.querySelector(".menus-bottom");
// function navbar(){
//     console.log('yesssss');
//     if(window.innerWidth < 1000){
//         console.log('yes');
//         navbar12.classList.add('navbar-hide');
//     }else{
//         navbar12.classList.remove('navbar-hide')
//     }
// }
window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    navbar12.classList.add("navbar-hide");
    navbarchange.classList.add("navbarchangeshow");
    bottommenu.classList.add("bottommenushow");
  } else {
    navbar12.classList.remove("navbar-hide");
    navbarchange.classList.remove("navbarchangeshow");
    bottommenu.classList.remove("bottommenu");
  }
});
// window.load = navbar();

const navbarmenus = document.querySelector(".navbar-menus");
const menubreack = document.querySelector(".menubreack");
const closeloginn2 = document.querySelector(".close-login3");
closeloginn2.addEventListener("click", function () {
  menubreack.classList.remove("menusshow");
});
navbarmenus.addEventListener("click", function () {
  menubreack.classList.add("menusshow");
});
const menusloginshow = document.querySelector(".menubreack-item2-item1");
menusloginshow.addEventListener("click", function () {
  loginsign.classList.add("show");
});

let proposalitem = document.querySelector(".pro-items").children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");
let totalItems = proposalitem.length;
let index = 0;
let aboutitems = document.querySelector(".proposal-about-items").children;
console.log(aboutitems);

nextSlide.onclick = function () {
  next("next");
};

prevSlide.onclick = function () {
  next("prev");
};
function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalItems) {
      index = 0;
    }
    console.log(index);
  } else {
    if (index == 0) {
      index = totalItems - 1;
      console.log(index);
    } else {
      index--;
      console.log(index);
    }
  }

  for (let i = 0; i < proposalitem.length; i++) {
    proposalitem[i].classList.remove("proposal-active");
  }
  proposalitem[index].classList.add("proposal-active");
  for (let i = 0; i < aboutitems.length; i++) {
    aboutitems[i].classList.remove("activep");
  }
  aboutitems[index].classList.add("activep");
}

const button = document.getElementsByTagName("button");
const shopitem = document.querySelector(".shop-items");
const data = document.querySelector(".data-count");
const shopitems2 = document.querySelector('.shop-items2');

for (but of button) {
  but.addEventListener("click", (e) => {
    const add = Number(data.getAttribute("data-count") || 0);
    data.setAttribute("data-count", add + 1);
    data.classList.add("zero");

    let parent = e.target.parentNode;
    console.log(parent);
    shopitems2.classList.add('display')

    let clone = parent.cloneNode(true);
    console.log(clone);

    shopitem.appendChild(clone);

    clone.lastElementChild.innerText = "خرید";
    clone.lastElementChild.classList.add('buybutton');
    clone.lastElementChild.classList.remove('add-button');

    if (clone) {
      data.onclick = () => {
        shopitem.classList.toggle("display");
      };
    }
  });
};

const addtooltip = document.querySelector('.tooltips-add');
const lovetolt = document.querySelector('.tooltips-love');

addtooltip.addEventListener('click',function(){
  lovetolt.classList.toggle('tolt-show');
})
