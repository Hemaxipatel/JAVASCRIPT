let togglebtn = document.querySelector(".toggle_btn");
let nav_bar = document.querySelector(".nav-bar");
let icon = document.querySelector(".fa-bars");

togglebtn.addEventListener("click", function () {
    nav_bar.classList.toggle("nav-change");

    if (nav_bar.classList.contains("nav-change") == true) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// change menubar bg color when it scroll

function changebg() {
    let header = document.querySelector("header");
    let current = window.scrollY;

    if (current > 0) {
        header.classList.add("header-fixed")
    }
    else {
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll", changebg);
