const menuButton = document.querySelector(".menu");

function toggleMenu() {
    const divLink = document.querySelector("div");
    divLink.classList.toggle("hide");
    // look here for possible issues, menu is the same name
}

// function toggleNewHide() {
//     const linkVar = document.querySelectorAll("a");
//     linkVar.classList.toggle("hide");
// }

//menuButton.addEventListener("click", toggleMenu);

menuButton.addEventListener("click", toggleMenu);