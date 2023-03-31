const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part.name} exercise={part.exercises}/>
      )}
    </div>
  )
}

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Total = ({parts}) => {
  let total = 0
  parts.map(part => total = total + part.exercises)

  return (
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App