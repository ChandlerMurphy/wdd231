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

// Member Cards Display and Modal Info
import {membershipLevels} from "../data/member-levels.js";
console.log(membershipLevels);

const memberCards = document.querySelector("#member-cards");
const dialogBox = document.querySelector("#dialog");
const dialogTitle = document.querySelector("#dialog h2");
const dialogButton = document.querySelector("#dialog button");
const dialogPrice = document.querySelector("#price");
const dialogPerks = document.querySelector("#perks");

function displayMemberCards(membershipLevels) {
    membershipLevels.forEach(member => {
        const card = document.createElement("div");
        const title = document.createElement("h3")
        const button = document.createElement("button");

        title.textContent = `${member.level} Membership Level`;
        button.textContent = `Learn More`;
        button.addEventListener("click", () => showStuff(member));

        card.appendChild(title);
        card.appendChild(button);

        memberCards.appendChild(card);
    });
}

function showStuff(member) {
    dialogTitle.innerHTML = `${member.level} Membership Level`;
    dialogPrice.innerHTML = `Annual Price: ${member.price}`;
    dialogPerks.innerHTML = `Member Perks: ${member.perks}`;
    dialogBox.showModal();
}

dialogButton.addEventListener("click", () => {
    dialogBox.close()
});

displayMemberCards(membershipLevels);
