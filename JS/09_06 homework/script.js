class Selector {
    constructor(name) {
        this.name = name;
        this.styles = {};
    }

    addProperty(name, value) {
        this.styles[name] = value;
    }


    getCSS() {
        let styleString = Object.entries(this.styles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
        return `.${this.name} { ${styleString} }`;
    }
}


let sel = new Selector('btn');
sel.addProperty('color', 'red');
sel.addProperty('font-size', '16px');
console.log(sel.getCSS());


class Button {
  constructor(width, height, text) {
    this.width = width;
    this.height = height;
    this.text = text;
  }

  showBtn() {
    document.write(
      `<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`
    );
  }
}

class BootstrapButton extends Button {
  constructor(width, height, text, color) {
    super(width, height, text);
    this.color = color;
  }

  showBtn() {
    document.write(
      `<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color}; color:white;">${this.text}</button>`
    );
  }
}

let btn = new BootstrapButton(120, 40, 'Click', 'blue');
btn.showBtn();



class ExtendedDate extends Date {
  getTextDate() {
    let months = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    return `${this.getDate()} ${months[this.getMonth()]}`;
  }

  isFutureOrToday() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return this >= today;
  }

  isLeapYear() {
    let year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  getNextDate() {
    let next = new Date(this);
    next.setDate(this.getDate() + 1);
    return next;
  }
}

let date = new ExtendedDate('2025-06-10');
console.log(date.getTextDate());
console.log(date.isFutureOrToday());
console.log(date.isLeapYear());
console.log(date.getNextDate());

