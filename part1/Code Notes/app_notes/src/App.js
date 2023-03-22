import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

import { useState } from "react" // imports useState function

/***** A Function that Returns a Function &
 * Passing event hanlders to child components *****/

const Button = (props) => (
  <button onClick={props.HandleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log("value now", newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <Button HandleClick={() => setToValue(1000)} text="Thousand"/>
      <Button HandleClick={() => setToValue(0)} text="Reset"/>
      <Button HandleClick={() => setToValue(value + 1)} text="Increment"/>
    </div>
  )
}

/* returning function to change value -> setValue(newValue)
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log("value now", newValue) // print the new value to console
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>Thousand</button>
      <button onClick={setToValue(0)}>Reset</button>
      <button onClick={setToValue(value + 1)}>Increment</button>
    </div>
  )
}
*/

/* returning function to output
const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => { console.log("Hello", who) }

  return (
    <div>
      {value}
      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
    </div>
  )
}
*/

/***** Handling Arrays &
 * Update of the State is Asynchronous 
 * Conditional Rendering *****

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(" ")}
    </div>
  )
}

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left"/>
      <Button handleClick={handleRightClick} text="Right"/>
      {right}
      <History allClicks={allClicks}/>
    </div>  
  )
}
*/

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