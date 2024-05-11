const menuBar = document.querySelector(".menu_bar");
const menuMobile = document.querySelector(".menu_mobile");

const onClose = () => {
    menuMobile.classList.toggle("js-showMenu")
}

menuBar.addEventListener("click", () => {
    onClose();
});