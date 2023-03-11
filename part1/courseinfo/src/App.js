// part 1.1 & part 1.2
const Header = (props) => {
  console.log("Header:", props)
  
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log("Content:", props)

  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </div>
  )
    /* part 1.1}
    <div>
      <p>
        <part={props.part} exercise={props.exercise}/>
      </p>
    </div>
    */
}

const Total = (props) => {
  console.log("Total:", props)

  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {
  console.log("Part:", props)

  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    { course_part: "Fundamentals of React", exercise: 10 },
    { course_part: "Using props to pass data", exercise: 7 },
    { course_part: "State of a component", exercise: 14 },
  ]

  return (
    <div>
      <Header course={course}/>

      {/*parts.map((part) => <Content part={part.course_part} exercise={part.exercise}/>) <-- gives warning in red*/}
      {/* part 1.1
      <Content part={parts[0].course_part} exercise={parts[0].exercise}/>
      <Content part={parts[1].course_part} exercise={parts[1].exercise}/>
      <Content part={parts[2].course_part} exercise={parts[2].exercise}/>
      */}
      {/* part 1.2 */}
      <Content part1={parts[0].course_part} exercise1={parts[0].exercise}
        part2={parts[0].course_part} exercise2={parts[0].exercise}
        part3={parts[0].course_part} exercise3={parts[0].exercise}/>

      <Total total={parts[0].exercise + parts[1].exercise + parts[2].exercise}/>
    </div>
  )
}

export default App