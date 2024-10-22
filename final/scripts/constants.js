// Toggle for Hambuger Menu vvv
const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-nav");
    hamButton.classList.toggle("open-ham");
});

// Footer Current Year vvv
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// Footer Last Modified vvv
const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = (document.lastModified); 