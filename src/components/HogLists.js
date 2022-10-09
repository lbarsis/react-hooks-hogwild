import HogTile from "./HogTile";
import {useState} from "react"

function HogLists({ hogs }) {

  const [hogName, setHogName] = useState("Babe")

  const displayHogs = hogs.map(hog => {
    function handleClick(){
      setHogName(hog.name)
    }

    if (hogName === hog.name) {
      return <HogTile 
      key={hog.name} 
      hog={hog} 
      wieght={hog.weight}
      greased={hog.greased}
      medal={hog["highest medal achieved"]}
      specialty={hog.specialty}
      onHandleClick={handleClick}
      />
    } else {
      return <HogTile key={hog.name} hog={hog} onHandleClick={handleClick}/>
    }
    
  })

  return (
    <div>
      {displayHogs}
    </div>
  )
}

export default HogLists