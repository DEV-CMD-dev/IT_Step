//task 1
array = [];

for (let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * 100)
}

console.log(array)

//task 2

for (let i = 0; i < array.length; i++) {
    console.log(`[${i}] - ${array[i]}`)
}

//task 3

function task3(arr) {
    return arr.filter(el => el % 7 === 0);
}

console.log(task3(array));

//task 4
array.sort((a, b) => b - a )
console.log(array)
//task 5
array.fill(0, array.length/2, array.length )
console.log(array)

//task 6
array.splice(0, 3);
console.log(array)

//task 7
function task7(arr) {
    return new Set(arr).size !== arr.length;
}

console.log(task7(array))

//task 8
let newArray = array.slice(1, array.length - 1);
console.log(newArray);

//task 9
function task8(arr) {
    return arr.filter(el => el % 2 === 0).length;
}


console.log(task8(array))