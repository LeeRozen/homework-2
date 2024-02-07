function toggleMenu() {
    const menu = document.querySelector(".menu_links"); /*targeting the .menu_links elements*/
    const icon = document.querySelector(".hamburger_icon"); /*targeting the .hamburger_icon element*/
    menu.classList.toggle("open");
    icon.classList.toggle("open"); /*when it clicked, its either add or remove the open class element, and it will have its style properties from the CSS*/ 
}