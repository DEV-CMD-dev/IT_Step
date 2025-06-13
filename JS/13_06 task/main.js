const api = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const grid = document.querySelector('#card-grid');

const searchBtn = document.querySelector('#searchBtn');
const searchBar = document.querySelector('#searchBar');

async function loadProducts() {
    const response = await fetch(`${api}&page=${pagination.page}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmRjNDMyODg5Zjc1M2FjMDFkMTU4YzQwY2M5ZWQ4ZCIsIm5iZiI6MTc0OTgzMjYwNy4zODIwMDAyLCJzdWIiOiI2ODRjNTM5ZmI2YTlhYWM1NGUxZWJkOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ypR608Irhl2dd9fVGl5mRRzA6e5Dfw6ugg2Sc1PnSOQ",
            "Accept": "application/json"
        }
    })
    const data = await response.json();

    console.log(data);
    data.results.forEach(i => addProductToHtml(i))
}

function addProductToHtml(i) {
    grid.innerHTML += `<div class="col">
                        <div class="card h-100">
                            <img height="200" src="https://image.tmdb.org/t/p/w500${i.backdrop_path}"
                                class="card-img-top" alt="${i.title}">
                            <div class="card-body">
                                <h5 class="card-title">${i.title}</h5>
                                <p class="card-text">Release date: ${i.release_date}</p>
                                <p class="card-text">Vote count: ${i.vote_count}</p>
                            </div>
                        </div>
                    </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
})

loadMoreBtn.onclick = () => {
    pagination.next();
    loadProducts();
}

