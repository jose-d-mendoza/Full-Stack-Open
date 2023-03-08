// full stack open

import React from "react"

/* after compilation (handled by Babel): */
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
