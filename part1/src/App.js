// full stack open

import React from "react"

/***** Props: Passing Data to Components Section *****/
/* Hello with 2 props */
const Hello = (props) => {
  console.log(props)
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
      <Hello name="Gloria" age={10 + 16}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

/* passing hardcoded values
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Jose"/>
      <Hello name="Gloria"/>
    </div>
  )
}
*/

/***** Multiple Components Section *****/
/* const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello/>
    </div>
  )
} */

/***** JSX Section *****/
/* after compilation (handled by Babel):
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, "Hello world, it is ", now.toString()
    ),
    React.createElement(
      'p', null, a, " plus ", b, " is ", a + b
    )
  )
}
*/

/***** Component Section *****/
/* render dynamic content
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
*/

/* console output
const App = () => {
  console.log("Hello from component")
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}
*/

/* simple
const App = () => (
  <div>
    <p>Hello World</p>
  </div>
)
*/

export default App
