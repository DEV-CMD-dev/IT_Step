class CardPair {

    constructor(icon) {
        this.icon = icon;
    }

    addCard(targetField, gameInstance) {
        const newElement = document.createElement("div");
        const p = document.createElement("p");
        p.classList.add("invisible");
        p.textContent = this.icon;

        newElement.classList.add("card");
        newElement.appendChild(p);
        targetField.appendChild(newElement);

        newElement.addEventListener("click", () => {
            gameInstance.cardClicked(newElement, this.icon);
        });
    }
}


class Game {
    constructor(count) {
        this.counter = parseInt(document.querySelector(".counter").textContent);
        this.field = document.querySelector(".field");
        this.emojis = ["😀", "😂", "😎", "🥲", "🤔", "😡", "😱", "😍", "😴", "🤖"];
        this.count = count;
        this.openedCards = [];

        this.generateCards();
    }

    generateCards() {
        if (this.count % 2 !== 0) {
            console.error("cards count must be even");
            return;
        }

        const selectedEmojis = this.emojis.slice(0, this.count / 2);
        const allIcons = [...selectedEmojis, ...selectedEmojis].sort(() => Math.random() - 0.5);

        allIcons.forEach(icon => {
            const card = new CardPair(icon);
            card.addCard(this.field, this);
        });
    }

    cardClicked(cardElement, icon) {
        const p = cardElement.querySelector("p");

        if (p.classList.contains("visible") || this.openedCards.length >= 2)
            return;

        if (this.openedCards.some(card => card.cardElement === cardElement))
            return;

        this.counter++;
        document.querySelector(".counter").textContent = this.counter;



        p.classList.remove("invisible");
        p.classList.add("visible");
        this.openedCards.push({ cardElement, icon });

        if (this.openedCards.length === 2) {
            const [first, second] = this.openedCards;
            if (first.icon === second.icon) {
                this.openedCards = [];
            } else {
                setTimeout(() => {
                    first.cardElement.querySelector("p").classList.remove("visible");
                    first.cardElement.querySelector("p").classList.add("invisible");

                    second.cardElement.querySelector("p").classList.remove("visible");
                    second.cardElement.querySelector("p").classList.add("invisible");

                    this.openedCards = [];
                }, 1000);
            }
        }
        this.isGameEnded()
    }

    isGameEnded() {
    const cards = this.field.querySelectorAll(".card");
    let total = 0;
    cards.forEach(el => {
        const p = el.querySelector("p");
        if (p.classList.contains("visible"))
            total++;
    });

    if (total === this.count) {
        console.log("game ended");
    } else {
        console.log("game in progress");
    }
}


}



a = new Game(16)


