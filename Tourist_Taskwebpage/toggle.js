// change menubar bg color when it scroll

function changebg() {
    let homepage = document.querySelector(".home-page");
    let current = window.scrollY;

    if (current > 0) {
        homepage.classList.add("homepage-fixed")
    }
    else {
        homepage.classList.remove("homepage-fixed")
    }
}
window.addEventListener("scroll", changebg);
