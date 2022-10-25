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