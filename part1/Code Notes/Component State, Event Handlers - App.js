import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

/***** Event Handling & 
 * An Event Handler is a Function & 
 * Passing State - To Child Components &
 * Refactoring the Components *****/

import { useState } from "react" // imports useState function

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log("Rendering with counter value", counter)

  const increaseByOne = () => {
    console.log("Increasing, value before:", counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log("Decreasing, value before:", counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log("Resetting to zero, value before:", counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text="Plus"/>
      <Button handleClick={decreaseByOne} text="Minus"/>
      <Button handleClick={setToZero} text="Reset"/>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button =({handleClick, text}) => <button onClick={handleClick}>{text}</button>

export default App

/***** Stateful Component *****

import { useState } from "react" // imports useState function

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log("rendering...", counter)

  return (
    <div>{counter}</div>
  )
}

export default App
*/

/***** Page Re-Rendering *****

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App
*/

/***** Component State, Event Handlers *****/
/*
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Jose"
  const age = 26

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Gloria" age={16 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App
*/