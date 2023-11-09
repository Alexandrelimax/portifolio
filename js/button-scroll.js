const buttonScroll = document.querySelector(".bi.bi-arrow-up-circle-fill");
const backgroundButton = document.querySelector(".buttonBacktoTop");
const titleProject = document.querySelector("#projects");

const showButtonScroll = () => {
  const targetElement = titleProject.getBoundingClientRect().top;

  buttonScroll.style.display =
    targetElement < window.innerHeight ? "block" : "none";

  backgroundButton.style.display =
    targetElement < window.innerHeight ? "block" : "none";
};
showButtonScroll()

const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", showButtonScroll);
buttonScroll.addEventListener("click", backToTop);