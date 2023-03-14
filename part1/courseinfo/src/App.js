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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }

  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }

  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      {/*parts.map((part) => <Content part={part.course_part} exercise={part.exercise}/>) <-- gives warning in red*/}
      <Content part1={part1.name} exercise1={part1.exercises}
        part2={part2.name} exercise2={part2.exercises}
        part3={part3.name} exercise3={part3.exercises}/>

      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App