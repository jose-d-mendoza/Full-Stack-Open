import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

/***** Complext State *****/

import { useState } from "react" // imports useState function

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

export default App