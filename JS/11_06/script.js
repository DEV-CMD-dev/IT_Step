const stock = {
    "apple": 10,
    "banana": 0,
    "orange": 5,
};

function checkStock(product) {
    return new Promise((resolve, reject) => {
        if (product in stock && stock[product] > 0) {
            resolve(`${stock[product]} ${product}(s) in stock.`);
        } else {
            reject(`${product} is out of stock.`);
        }
    });
}

checkStock("apple")
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });



function fetchUser(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("User not found");
            }
        }, 2000);
    });
}

fetchUser(1)
    .then(user => {
        console.log(`User found: ${user.name}`);
    })
    .catch(() => {
        console.log("User not found");
    })