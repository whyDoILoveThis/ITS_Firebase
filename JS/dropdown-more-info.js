let isInfoBoxOpen = false;
const buttons = document.querySelectorAll(".moreInfoBtn");

buttons.forEach((button) => {
    button.addEventListener("click", toggleInfo);
} )

// Step 1: Check if the button has the class ".btn--important"


function toggleInfo(event) {
    const button = event.currentTarget;
    const infoBox = button.nextElementSibling;
    if (button.classList.contains("btn--important")) {
        // Step 2: Select the next sibling element and change its border color to red
        button.nextElementSibling.style.borderColor = "coral";
    }

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