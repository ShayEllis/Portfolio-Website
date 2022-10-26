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
    }
};

window.addEventListener("scroll", resetAnimation);

//Form label movement

let inputContainers = document.getElementsByClassName("input-container");

let moveLabel = (event) => {
    event.target.labels[0].style.top = ".3rem";
    event.target.labels[0].style.color = "var(--strong-color)";
    event.target.labels[0].style.transform = "scale(.85)";
};

let resetLabel = (event) => {
    if (event.target.value.length === 0) {
        event.target.labels[0].style.top = "";
        event.target.labels[0].style.color = "";
        event.target.labels[0].style.transform = "";
    };
};

for (let el of inputContainers) {
    el.lastElementChild.addEventListener("focus", moveLabel);
    el.lastElementChild.addEventListener("input", resetLabel);
    el.lastElementChild.addEventListener("blur", resetLabel);
};



//