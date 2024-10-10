// Member Cards Display and Modal Info
import {membershipLevels} from "../data/member-levels.js";

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
        button.setAttribute("class", "learn-more");

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
