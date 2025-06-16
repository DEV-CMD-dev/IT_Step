const blocksDiv = $(".blocks");

let addBlock = $(".addBlock")

addBlock.on("click",() => {
    const block = document.createElement('div');
    block.style.backgroundColor = getRandomColor();
    block.style.width = '100px';
    block.style.height = '100px';
    block.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        block.remove();
    })
    blocksDiv.append($(block));
})



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class TrafficLight {

    constructor() {
        this.container = $(".lights");

        this.green = this.container.find(".green-light");
        this.yellow = this.container.find(".yellow-light");
        this.red = this.container.find(".red-light");

        this.lights = [this.green, this.yellow, this.red]

        this.state = 0;
    }

    nextLight() {
        this.lights.forEach((el) => {
            el.css("background","grey")
        })

        switch (this.state) {
            case 0:
                this.lights[0].css("background","green")
                break;
            case 1:
                this.lights[1].css("background","yellow")
                break;
            case 2:
                this.lights[2].css("background","red")
                break;
            case 3:
                this.lights[2].css("background","red")
                this.lights[1].css("background","yellow")
                break;
            default:
                break;
        }


        this.state = (this.state + 1) % 4;
    }

}

let trafficLight = new TrafficLight()

switchBtn = $("#switchBtn")
switchBtn.on("click", () => {
    trafficLight.nextLight()
})

