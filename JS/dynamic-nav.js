const head = document.getElementsByTagName('head')[0];
const tabIcon = document.createElement("link");
tabIcon.href = "/img/site-logo-icon.png";
tabIcon.rel = "icon";
head.appendChild(tabIcon);

const articleWrap = document.querySelector(".article-wrap");

const copyright = document.createElement("p");
copyright.classList.add("copyright");

articleWrap.appendChild(copyright);

// Select the target element
const container = document.querySelector(".main-wrap");

// Create the main navigation element
const navigation = document.createElement("nav");
navigation.classList.add("nav");

function expandNav(){
    navigation.classList.toggle("nav-expanded")
}

const navToggler = document.createElement("img");
navToggler.src = "/img/icon-nav-toggler.png";
navToggler.classList.add("nav-toggler");
navToggler.addEventListener("click", expandNav);



// Create the logo-wrap div
const logoWrap = document.createElement("div");
logoWrap.classList.add("logo-wrap");

// Create the logo icon
const logoIcon = document.createElement("img");
logoIcon.src = "/img/site-logo-icon.png";
logoIcon.alt = "";
logoIcon.classList.add("logo__icon");


// Create the logo tag
const logoTag = document.createElement("p");
logoTag.classList.add("logo__tag");
logoTag.innerText = "ITS Firebase";


const darkModeTogglerWrap = document.createElement("div");
darkModeTogglerWrap.classList.add("dark-mode-toggler-wrap");
const darkModeToggler = document.createElement("img");
darkModeTogglerWrap.appendChild(darkModeToggler);
darkModeToggler.src = "/img/icon-brightness-dim.png";
darkModeToggler.style.width = "25px";
darkModeToggler.classList.add(".dark-mode-toggler");

const article = document.querySelector('.article')


darkModeToggler.addEventListener("click", toggleBrightness);


const infoBoxes = document.querySelectorAll('.btn--more-info-box');


// Check if 'bright' is stored in localStorage
const storedBright = localStorage.getItem('bright');

// Initialize 'bright' with the stored value (or default to false if not found)
let bright = storedBright === 'false';


function toggleBrightness() {
    bright = !bright;
    
    // Store the updated 'bright' value in localStorage
    localStorage.setItem('bright', bright);

 // Update UI and apply styles based on 'bright' state

    if(bright){
    darkModeToggler.src = "/img/icon-brightness-bright.png";
    document.body.style.backgroundColor = 'rgb(224, 224, 224)';
    article.style.backgroundColor = 'rgb(241, 241, 241)';
    article.style.color = '#202020';
    copyright.style.color = 'black';
    infoBoxes.forEach(infoBox => {
        infoBox.style.backgroundColor = '#eeeeee';
        infoBox.style.color = '#202020';
    });
    } else {
        darkModeToggler.src = "/img/icon-brightness-dim.png";
        document.body.style.backgroundColor = 'rgb(36, 31, 35)';
        article.style.backgroundColor = 'rgb(49, 49, 49)';
        article.style.color = 'rgba(255, 255, 255, 0.90)';
        copyright.style.color = 'white';
        infoBoxes.forEach(infoBox => {
            infoBox.style.backgroundColor = '#363232';
            infoBox.style.color = 'rgba(255, 255, 255, 0.90)';
        });
    }
}

// Call toggleBrightness to initialize UI based on stored value
toggleBrightness();


// Append the logo icon and tag to the logo-wrap div
logoWrap.appendChild(navToggler);
logoWrap.appendChild(logoIcon);
logoWrap.appendChild(logoTag);



// Create the links list
const linkList = document.createElement("ul");
linkList.classList.add("link__list");


/****************LINKS****************** */
/****************LINKS****************** */
// Create a list item for the link
const linkItem7 = document.createElement("li");
linkItem7.classList.add("link");
const linkFirebaseHostingSetup = document.createElement("a");
linkFirebaseHostingSetup.href = "/html/firebase-hosting-setup.html";
linkFirebaseHostingSetup.innerText = "🔥Firebase Hosting Setup";
// Append the link to the list item
linkItem7.appendChild(linkFirebaseHostingSetup);
// Append the list item to the links list
linkList.appendChild(linkItem7);

const linkItem8 = document.createElement("li");
linkItem8.classList.add("link");
const linkFirebaseLogAuth = document.createElement("a");
linkFirebaseLogAuth.href = "/html/firebase-login-auth.html";
linkFirebaseLogAuth.innerText = "🔐Firebase Login Auth";
linkItem8.appendChild(linkFirebaseLogAuth);
linkList.appendChild(linkItem8);

const linkItem9 = document.createElement("li");
linkItem9.classList.add("link");
const linkModifyElementsBasedOnAuthStatus = document.createElement("a");
linkModifyElementsBasedOnAuthStatus.href = "/html/modify-elements-for-auth-users.html";
linkModifyElementsBasedOnAuthStatus.innerText = "🔀Modify Elements Based On Auth Status";
linkItem9.appendChild(linkModifyElementsBasedOnAuthStatus);
linkList.appendChild(linkItem9);

const linkItem10 = document.createElement("li");
linkItem10.classList.add("link");
const linkMostSimpleUsernameDisplay = document.createElement("a");
linkMostSimpleUsernameDisplay.href = "/html/firebase-most-simple-username-display.html";
linkMostSimpleUsernameDisplay.innerText = "📝Most Simple Username Display";
linkItem10.appendChild(linkMostSimpleUsernameDisplay);
linkList.appendChild(linkItem10);

const linkItem11 = document.createElement("li");
linkItem11.classList.add("link");
const linkFirestoreSetup = document.createElement("a");
linkFirestoreSetup.href = "/html/firestore-setup.html";
linkFirestoreSetup.innerText = "🗃️Firestore Setup";
linkItem11.appendChild(linkFirestoreSetup);
linkList.appendChild(linkItem11);

const linkItem12 = document.createElement("li");
linkItem12.classList.add("link");
const linkUsingFirestore = document.createElement("a");
linkUsingFirestore.href = "/html/using-firestore.html";
linkUsingFirestore.innerText = "👨‍🚒Using Firestore";
linkItem12.appendChild(linkUsingFirestore);
linkList.appendChild(linkItem12);

const linkItem13 = document.createElement("li");
linkItem13.classList.add("link");
const linkUnderstandThen = document.createElement("a");
linkUnderstandThen.href = "/html/understanding-then.html";
linkUnderstandThen.innerText = "🧐.then(() => {})??";
linkItem13.appendChild(linkUnderstandThen);
linkList.appendChild(linkItem13);

const linkItem14 = document.createElement("li");
linkItem14.classList.add("link");
const linkWhatsNext = document.createElement("a");
linkWhatsNext.href = "/html/whats-next.html";
linkWhatsNext.innerText = "🤔What's Next?";
linkItem14.appendChild(linkWhatsNext);
linkList.appendChild(linkItem14);


/****************LINKS****************** */
/****************LINKS****************** */


// Append the logo-wrap div and links list to the navigation
navigation.appendChild(logoWrap);
navigation.appendChild(darkModeTogglerWrap);
navigation.appendChild(linkList);

// Append the navigation to the container
container.appendChild(navigation);
