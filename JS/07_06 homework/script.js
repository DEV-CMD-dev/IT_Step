let field = document.querySelector(".field")
let ball = document.querySelector(".ball")

field.addEventListener("click", (e) => {
    let size = field.getBoundingClientRect();
    let x = e.clientX - size.left - 75 / 2;
    let y = e.clientY - size.top - 75 / 2;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
})


class TrafficLight {

    constructor() {
        this.container = document.querySelector(".lights")

        this.green = this.container.querySelector(".green-light");
        this.yellow = this.container.querySelector(".yellow-light");
        this.red = this.container.querySelector(".red-light");

        this.lights = [this.green, this.yellow, this.red]

        this.state = 0;
    }

    nextLight() {
        this.lights.forEach(el => {
            el.style.background = "grey";
        });

        switch (this.state) {
            case 0:
                this.lights[0].style.background = "green";
                break;
            case 1:
                this.lights[1].style.background = "yellow";
                break;
            case 2:
                this.lights[2].style.background = "red";
                break;
            case 3:
                this.lights[2].style.background = "red";
                this.lights[1].style.background = "yellow";
                break;
            default:
                break;
        }


        this.state = (this.state + 1) % 4;
    }

}

let trafficLight = new TrafficLight()

switchBtn.addEventListener("click", () => {
    trafficLight.nextLight()
})