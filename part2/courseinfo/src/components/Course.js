const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

const Header = ({name}) => <h2>{name}</h2>

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
  const total = parts.reduce((s, p) =>  s + p.exercises, 0)

  return (
    <div>
      <p>
        <b>Total of {total} exercises</b>
      </p>
    </div>
  )
}

export default Course