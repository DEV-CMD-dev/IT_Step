import "./EmptyCart.css"

export default function EmptyCart(){
    return (
        <div className="emptyCart">
            <img src="/images/backgroundCart.png"></img>
            <h2>There no item here</h2>
            <a href="/">Shop now</a>
        </div>
    )
}