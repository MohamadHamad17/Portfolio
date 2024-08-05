const webimg = document.querySelector(".web-img");
const javaimg = document.querySelector(".java-img");
const gitimg = document.querySelector(".git-img");
const web = document.querySelector(".web");
const java = document.querySelector(".java");
const git = document.querySelector(".git");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const mblmenu = document.querySelector(".mbl-menu")

body.onload = function () {
    close.classList.add("hide"); 
    mblmenu.classList.add("hide");
}

close.onclick = function () {
    close.classList.add("hide");
    open.classList.remove("hide");
    mblmenu.classList.add("hide");
}

open.onclick = function () {
    open.classList.add("hide");
    close.classList.remove("hide");
    mblmenu.classList.remove("hide");
}

// skills //

webimg.onmouseenter = function(){
    web.classList.add("show"); 
};

webimg.onmouseleave = function() {
    web.classList.remove("show");
};

webimg.addEventListener("focus", (event) => {
    web.classList.add("show"); 
});

webimg.addEventListener("blur", (event) => {
    web.classList.remove("show"); 
});


javaimg.onmouseenter = function(){
    java.classList.add("show"); 
};

javaimg.onmouseleave = function() {
    java.classList.remove("show");
};

javaimg.addEventListener("focus", (event) => {
    java.classList.add("show"); 
});

javaimg.addEventListener("blur", (event) => {
    java.classList.remove("show"); 
});


gitimg.onmouseenter = function(){
    git.classList.add("show"); 
};

gitimg.onmouseleave = function() {
    git.classList.remove("show");
};

gitimg.addEventListener("focus", (event) => {
    git.classList.add("show"); 
});

gitimg.addEventListener("blur", (event) => {
    git.classList.remove("show"); 
});



const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper button");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft= startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {

    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");

    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
