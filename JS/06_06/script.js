googleBtn.onclick = () => {
    let win = window.open("test", "test", "height=410,width=410");

    setTimeout(() => {
        win.resizeTo(500, 500);
    }, 2000);

    setTimeout(() => {
        win.moveTo(200, 200);
    }, 4000);

    setTimeout(() => {
        win.close();
    }, 6000);
};

let time = document.getElementById("time");

function GetTime()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
}


function UpdateTime()
{
    time.textContent = GetTime();
    setTimeout(UpdateTime, 1000);
}

UpdateTime();