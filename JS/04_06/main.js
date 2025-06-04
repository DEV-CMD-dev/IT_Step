const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("car-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.carForm;
const modelInput = form.model;
const priceInput = form.price;
const yearInput = form.year;
const colorInput = form.color;
const isElectric = form.electric;

addBtn.onclick = (event) => {
    event.preventDefault();

    // read form values
    const item = new Car(
        modelInput.value,
        priceInput.value,
        yearInput.value,
        colorInput.value,
        isElectric.checked
    );

    tableBody.innerHTML += item.toHTMLRow();
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}
