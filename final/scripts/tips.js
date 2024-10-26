document.addEventListener("DOMContentLoaded", () => {
    const url = "https://www.dnd5eapi.co/api/monsters"

    const monsters = [
        { name: "Black Dragon", url: `${url}/adult-black-dragon`},
        { name: "Blue Dragon", url: `${url}/adult-blue-dragon`},
        { name: "Brass Dragon", url: `${url}/adult-brass-dragon`},
        { name: "Bronze Dragon", url: `${url}/adult-bronze-dragon`},
        { name: "Copper Dragon", url: `${url}/adult-copper-dragon`},
        { name: "Gold Dragon", url: `${url}/adult-gold-dragon`},
        { name: "Green Dragon", url: `${url}/adult-green-dragon`},
        { name: "Red Dragon", url: `${url}/adult-red-dragon`},
        { name: "Silver Dragon", url: `${url}/adult-silver-dragon`},
        { name: "White Dragon", url: `${url}/adult-white-dragon`},
        { name: "Dragon Turtle", url: `${url}/dragon-turtle`},
        { name: "Gold Wyrmling", url: `${url}/gold-dragon-wyrmling`},
        { name: "Green Wyrmling", url: `${url}/green-dragon-wyrmling`},
        { name: "Red Wyrmling", url: `${url}/red-dragon-wyrmling`},
        { name: "Silver Wyrmling", url: `${url}/silver-dragon-wyrmling`}
    ];

    async function apiFetch(monster) {
        try {
            const response = await fetch(monster.url);
            if (response.ok) {
                const data = await response.json();
                monster.alignment = data.alignment;
                monster.size = data.size;
                monster.hit_points = data.hit_points;
                monster.strength = data.strength;
                monster.dexterity = data.dexterity;
                monster.constitution = data.constitution;
                monster.intelligence = data.intelligence;
                monster.wisdom = data.wisdom;
                monster.charisma = data.charisma;
                monsterCards.innerHTML = "";
                displayMonsterCards(monsters);
            } else {
                throw Error(`Error fetching ${monster.name}: ${await response.text()}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchAllDragons() {
        for (const monster of monsters) {
            await apiFetch(monster);
        }
    }

    const monsterCards = document.querySelector("#monsters");
    const dialogBox = document.querySelector("#modal");
    const dialogTitle = document.querySelector("#monster-name");
    const dialogButton = document.querySelector("#modal-close");
    const dialogText = document.querySelector("#monster-info");

    function displayMonsterCards(monsters) {
        monsters.forEach(monster => {
            const card = document.createElement("div");
            const title = document.createElement("h3")
            const button = document.createElement("button");

            title.textContent = `Monster: ${monster.name}`;
            button.textContent = `Learn More`;
            button.addEventListener("click", () => showStuff(monster));

            card.appendChild(title);
            card.appendChild(button);

            monsterCards.appendChild(card);
        });
    }

    function showStuff(monster) {
        dialogTitle.innerHTML = `${monster.name}`;
        dialogText.innerHTML = `
        <p><span class="bold">Alignment: </span>${monster.alignment}</p>
        <p><span class="bold">Size: </span>${monster.size}</p>
        <p><span class="bold">Health Points: </span>${monster.hit_points}</p>
        <p><span class="bold">Strength: </span>${monster.strength}</p>
        <p><span class="bold">Dexterity: </span>${monster.dexterity}</p>
        <p><span class="bold">Constitution: </span>${monster.constitution}</p>
        <p><span class="bold">Intelligence: </span>${monster.intelligence}</p>
        <p><span class="bold">Wisdom: </span>${monster.wisdom}</p>
        <p><span class="bold">Charisma: </span>${monster.charisma}</p>
        `;
        dialogBox.showModal();
    }

    dialogButton.addEventListener("click", () => {
        dialogBox.close()
    });

    fetchAllDragons();
});

