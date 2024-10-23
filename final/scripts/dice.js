function rollDice (numSides) {
    return Math.ceil(Math.random() * numSides);
}

document.addEventListener("DOMContentLoaded", () => {
    d4element = document.querySelector("#d4result");
    d6element = document.querySelector("#d6result");
    d8element = document.querySelector("#d8result");
    d10element = document.querySelector("#d10result");
    d12element = document.querySelector("#d12result");
    d20element = document.querySelector("#d20result");
    d100element = document.querySelector("#d100result");
    
    d4button = document.querySelector("#d4button");
    d6button = document.querySelector("#d6button");
    d8button = document.querySelector("#d8button");
    d10button = document.querySelector("#d10button");
    d12button = document.querySelector("#d12button");
    d20button = document.querySelector("#d20button");
    d100button = document.querySelector("#d100button");

    d4button.addEventListener("click", () => {
        let diceResult = rollDice(4);
        d4element.textContent = diceResult;
    });
    
    d6button.addEventListener("click", () => {
        let diceResult = rollDice(6);
        d6element.textContent = diceResult;
    });
    
    d8button.addEventListener("click", () => {
        let diceResult = rollDice(8);
        d8element.textContent = diceResult;
    });
    
    d10button.addEventListener("click", () => {
        let diceResult = rollDice(10);
        d10element.textContent = diceResult;
    });
    
    d12button.addEventListener("click", () => {
        let diceResult = rollDice(12);
        d12element.textContent = diceResult;
    });
    
    d20button.addEventListener("click", () => {
        let diceResult = rollDice(20);
        d20element.textContent = diceResult;
    });
    
    d100button.addEventListener("click", () => {
        let diceResult = rollDice(100);
        d100element.textContent = diceResult;
    });
});




