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

inputContainers[0].firstElementChild.style.backgroundColor = "green";

//event.target.style.top = "4.8rem";