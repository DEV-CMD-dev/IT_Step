function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Comment({ userName, rate, text, date }) {


    return (
      <div className="Comment">
        <h2>{capitalizeFirstLetter(userName)}</h2>
        <p>Rate: {rate}/10</p>
        <p>{text}</p>
        <small>{date}</small>
      </div>
    )
  }
  