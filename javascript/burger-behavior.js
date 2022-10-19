var burger = document.getElementsByClassName("nav-burger");
var burgerSlide = document.getElementsByClassName("nav-burger-slide");

burger[0].addEventListener("click", () => {
    burger[0].classList.toggle("nav-burger-animation");
    burgerSlide[0].classList.toggle("visibility");
});