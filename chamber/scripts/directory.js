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

// Creating Directory Business Cards
const json = "data/members.json";
// const cards = document.querySelector('#business-cards');
const cards = document.querySelector(".grid-menu");

async function getBusinessData() {
    const response = await fetch(json);
    const data = await response.json()
    // console.table(data.businesses);
    displayBusinesses(data.businesses);
}

function displayBusinesses(businesses) {
    businesses.forEach((business) => {
        const card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");

        logo.setAttribute("src", business.iconUrl);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", business.iconWidth);
        logo.setAttribute("height", business.iconHeight);
        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = `Website Link`;
        website.setAttribute("href", business.websiteUrl)
        membership.textContent = `Mem Lvl: ${business.membership}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.setAttribute("class", "business-cards grid");

        cards.appendChild(card);
    });
};

getBusinessData();

// Toggling Business List Views 

function setupEventListeners() {
    // Setting up the event listeners in a function ensures that the .business-cards class and elements have been created before we access them. 
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", () => {
        const display = document.querySelectorAll(".business-cards");
        display.forEach(card => {
            card.classList.add("grid");
            card.classList.remove("list");
            cards.classList.add("grid-menu");
            cards.classList.remove("list-menu");
        });
    });

    listbutton.addEventListener("click", () => {
        const display = document.querySelectorAll(".business-cards");
        display.forEach(card => {
            card.classList.add("list");
            card.classList.remove("grid");
            cards.classList.add("list-menu");
            cards.classList.remove("grid-menu");
        });
    });
}

setupEventListeners();