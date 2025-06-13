const api = 'https://dummyjson.com/products';
const grid = document.querySelector('#card-grid');

const searchBtn = document.querySelector('#searchBtn');
const searchBar = document.querySelector('#searchBar');
let fullResponse = {};

async function loadProducts() {
    fullResponse = (await fetch(api + `?limit=194`)).json();
    console.log(fullResponse);
    const response = await fetch(api + `?limit=${pagination.limit}&skip=${pagination.skip}`);
    const data = await response.json();

    console.log(data);
    data.products.forEach(i => addProductToHtml(i))
}

function addProductToHtml(i) {
    grid.innerHTML += `<div class="col">
                        <div class="card h-100">
                            <img height="200" src="${i.thumbnail}"
                                class="card-img-top" alt="${i.title}">
                            <div class="card-body">
                                <h5 class="card-title">${i.title}</h5>
                                <p class="card-text">${i.price}$</p>
                                <p class="card-text">${capitilizeFirstLetter(i.category)}</p>
                            </div>
                        </div>
                    </div>`
}

function capitilizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
})

loadMoreBtn.onclick = () => {
    pagination.next();
    loadProducts();
}


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    grid.innerHTML = '';
    pagination.default();
    fullResponse.products.forEach(element => {
        
        if (element.title.toLowerCase().includes(searchBar.value.toLowerCase())) {
            addProductToHtml(element);
        }
    });
});

