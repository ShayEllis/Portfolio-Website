//Reset intro animations when at the top of the page

let introElements = document.getElementsByClassName("js-animation-reset");
let navHome = document.getElementById("start-js-reset");

let resetAnimation = () => {
    if (window.scrollY === 0) {
        for (let el of introElements) {
            el.style.animation = "none";
            setTimeout(() => {
            el.style.animation = '';
            }, 10);
        };
    };
};

window.addEventListener("scroll", resetAnimation);

//Form label movement

let inputContainers = document.getElementsByClassName("input-container");
let formElement = document.getElementsByTagName("form");

let moveLabel = (event) => {
    event.target.labels[0].classList.add("active-input");
    event.target.parentElement.style.setProperty('--before-scale', "scaleX(1)");
};

let resetLabel = (event) => {
    if (event.target.value.length === 0) {
        event.target.parentElement.style.setProperty('--before-scale', "");
        event.target.labels[0].classList.remove("active-input");
    };
};

for (let el of inputContainers) {
    el.lastElementChild.addEventListener("focus", moveLabel);
    el.lastElementChild.addEventListener("blur", resetLabel);
};

//