const menu = document.querySelector(".button-toggle");
const links = document.querySelector(".links-nav");

const showAndHideMenu = () => {
  links.classList.toggle("activate-nav");

  buttonAnimation();
};

const buttonAnimation = () => {
  setTimeout(() => {
    menu.style.padding = "7px 7px";
  }, 50);
  setTimeout(() => {
    menu.style.padding = "10px 10px";
  }, 150);
};

const checkMenuOpened = () => {
  const MaxWidthToShowMenu = 700;
  
  if (window.innerWidth > MaxWidthToShowMenu) {
    links.classList.remove("activate-nav");
  }
};

menu.addEventListener("click", showAndHideMenu);
window.addEventListener("resize", checkMenuOpened);
