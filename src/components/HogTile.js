function HogTile({ hog, hogName, onHandleClick }) {
  if (hogName === hog.name) {
    return (
      <div id={hog.name} onClick={onHandleClick} className="ui grid container">
        <h2 className="ui eight wide column">{hog.name}</h2>
        <img className="ui eight wide column" src={hog.image} alt={hog.name}></img>
        <h4 className="ui eight wide column">Hog Weight: {hog.weight}</h4>
        <h4 className="ui eight wide column">Hog is Greased: {String(hog.greased)}</h4>
        <h4 className="ui eight wide column">Hog Medals: {hog['highest medal achieved']}</h4>
        <h4 className="ui eight wide column">Hog specialty: {hog.specialty}</h4>
      </div>
    )
  } else {
    return (
    <div className="ui grid container" id={hog.name} onClick={onHandleClick}>
      <h2 className="ui eight wide column">{hog.name}</h2>
      <img className="ui eight wide column" src={hog.image} alt={hog.name}></img>
    </div>
    )
  }
}

export default HogTile