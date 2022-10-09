

function HogTile({ hog, weight, onHandleClick}) {

  return (
    <div id={hog.name} onClick={onHandleClick}>
      <h2>{hog.name}</h2>
      <img src={hog.image}></img>
      <p>{hog.weight}</p>
    </div>
  )
}

export default HogTile