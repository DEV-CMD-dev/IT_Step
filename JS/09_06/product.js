const form = document.forms.searchForm;
const url = 'https://dummyjson.com/products'

form.onsubmit = (e) =>{
    e.preventDefault();
    searchProduct();
}

async function searchProduct()
{
    const res = await fetch(url);
    console.log(res.ok)
    const data = await res.json();
    console.log(data);

    const product = data.products.find(i => i.title.toLowerCase().includes(form.username.value));

    if(product)
    {
        productData.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <strong>Price: $${product.price}</strong>
        `
    }
    else{
        productData.innerHTML = `<h2>Product not found</h2>`
    }
}