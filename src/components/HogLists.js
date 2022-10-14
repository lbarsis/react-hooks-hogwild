import HogTile from "./HogTile";
import { useState } from "react"

function HogLists({ hogsData}) {
  const [hogName, setHogName] = useState(null)

  const displayHogs = hogsData.map(hog => {
    function handleClick() {
      if (hogName === hog.name) {
        setHogName(null)
      } else {
        setHogName(hog.name)
      }
    }

    if (hogName === hog.name) {
      return <HogTile key={hog.name} hogName={hogName} hog={hog} onHandleClick={handleClick} />
    } else {
      return <HogTile key={hog.name} hog={hog} onHandleClick={handleClick} />
    }
  })

  return (
    <div>
      {displayHogs}
    </div>
  )
}

export default HogLists