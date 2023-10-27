// script.js
let isInfoBoxOpen = false;
const buttons = document.querySelectorAll(".moreInfoBtn");

buttons.forEach((button) => {
    button.addEventListener("click", toggleInfo);
} )

function toggleInfo(event) {
    const button = event.currentTarget;
    const infoBox = button.nextElementSibling;

    if (!isInfoBoxOpen) {
        infoBox.style.animationName = "bounceDown";
        infoBox.style.display = "block";
    } else {
        infoBox.style.animationName = "bounceUp";
        setTimeout(() => {
            infoBox.style.display = "none";
        }, 500); // Wait for the animation to complete
    }

    isInfoBoxOpen = !isInfoBoxOpen;
}


