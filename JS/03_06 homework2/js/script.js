class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

    calculateLength() {
        return 2 * Math.PI * this.radius;
    }
}

let a = new Circle(50)

console.log(a.radius)
console.log(a.diameter)


class HtmlElement {
    constructor(tagName, isSelfClosing = false, text = '') {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }


    setAttribute(name, value) {
        this.attributes.push({ name, value });
    }


    setStyle(property, value) {
        this.styles.push({ property, value });
    }

    pushChild(element) {
        this.children.push(element)
    }


    unshiftChild(element) {
        this.children.unshift(element);
    }


    getHtml() {
        const attrString = this.attributes.map(a => ` ${a.name}="${a.value}"`).join('');
        const styleString = this.styles.length > 0
            ? ` style="${this.styles.map(s => `${s.property}:${s.value}`).join(';')}"`
            : '';

        if (this.isSelfClosing) {
            return `<${this.tagName}${attrString}${styleString} />`;
        }

        const innerHtml = this.text + this.children.map(child => child.getHtml()).join('');
        return `<${this.tagName}${attrString}${styleString}>${innerHtml}</${this.tagName}>`;
    }

}


let el = new HtmlElement("div")

el.setAttribute("class", "test")

let text = new HtmlElement("h1", false, "test hello")
text.setStyle("color", "blue")

el.pushChild(text)

document.write(el.getHtml())


class CssClass
{
    constructor(name)
    {
        this.name = name;
        this.styles = [];
    }

    pushStyle(styleName, value)
    {
        this.styles.push({ styleName, value });
    }

    removeStyle(styleName)
    {
        this.styles = this.styles.filter((el)=>{
            return el.styleName !== styleName;
        })
    }

    getCss()
    {
        const style = this.styles.map(el => `${el.styleName} : ${el.value};`);
        return `.${this.name} {${style}}`;
    }
}


let b = new CssClass("test")
b.pushStyle("background-color", "lime")
b.pushStyle("margin", "25px")
b.pushStyle("width", "150px")
b.pushStyle("height", "150px")
console.log(b);

b.removeStyle("margin")
console.log(b.getCss());

document.write("<style>"+b.getCss()+"</style>")

