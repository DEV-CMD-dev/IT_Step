class Car {
    constructor(model, price, year, color, isElectric) {
        this.model = model;
        this.price = price;
        this.year = year;
        this.color = color;
        this.isElectric = isElectric;
    }

    toHTMLRow() {
        return `<tr>
                    <td>${capitalizeFirstLetter(this.model)}</td>
                    <td>${this.price}$</td>
                    <td>${this.year}</td>
                    <td>${capitalizeFirstLetter(this.color)}</td>
                    <td>${this.isElectric ? 'Yes' : 'No'}</td>
                </tr>`;
    }
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
