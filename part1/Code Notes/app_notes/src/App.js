import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

import { useState } from "react" // imports useState function

/***** Handling Arrays *****/

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
    </div>  
  )
}

/***** Complext State *****

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
    setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () =>
    setClicks({...clicks, right: clicks.right + 1})

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  )
}
*/

export default App