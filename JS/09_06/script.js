const url = "https://jsonplaceholder.typicode.com/users";
const userList = document.querySelector(".UserList");

async function loadUsers(){
    const response = await fetch(url);
    
    console.log(response.status);

    if (!response.ok) {
        console.error("HTTP error", response.status);
        return;
    }

    const users = await response.json();

    // userList.innerHTML = users.map(user => `<li>${user.name} (${user.email})</li>`).join("");
    for (const i of users) {
        userList.innerHTML += `<li>${i.name} (${i.email})</li>`;
    }

    console.log("Got response", users);
}

loadUsers();

console.log("hello")


