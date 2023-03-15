import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"

/***** Component state, event handlers *****/

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
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
