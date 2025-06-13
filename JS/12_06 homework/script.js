const fridge = document.querySelector(".fridge")

class Product {
    constructor(imgUrl, name) {
        this.img = document.createElement("img");
        this.img.src = imgUrl;
        this.img.style.width = "200px";
        this.img.style.height = "200px";

        this.img.style.borderRadius = "15px";

        this.name = document.createElement("span");
        this.name.textContent = name;

        this.createCard(fridge);
    }

    createCard(div) {
        div = document.createElement("div");
        div.style.height = "250px";
        div.style.width = "200px";
        div.style.border = "2px solid black"
        div.style.borderRadius = "15px"

        div.appendChild(this.img)
        div.appendChild(this.name)

        fridge.appendChild(div);
    }

}

addApple.addEventListener("click", () => {
    new Product("https://freepng.com/uploads/images/202302/ree-vector-red-apple-png_1020x.jpg", "Apple")
})


addFish.addEventListener("click", () => {
    new Product("https://img.freepik.com/free-vector/fresh-fish-seafood-healthy-icon_24877-83316.jpg?semt=ais_hybrid&w=740", "Fish")
})

addEggs.addEventListener("click", () => {
    new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFNmCiWUafB2kaPOYl1ZafVvRx3P6ZYi65Q&s", "Eggs")
})


