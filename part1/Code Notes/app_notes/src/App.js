import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

/***** Page Re-Rendering *****/

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App

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