const url = "https://api.github.com/users";
const form = document.forms.searchForm;

form.onsubmit = (e) => {
    e.preventDefault();
    searchUser();
};

async function searchUser() {
    const res = await fetch(url);
    const data = await res.json();

    const user = data.find(i => i.login.toLowerCase().includes(form.username.value.toLowerCase()));

    if(user){
        userImage.src = user.avatar_url;
        login.textContent = user.login;
        userUrl.textContent = user.html_url;
    }
}