import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Arto Hellas"}
  ])
  const [newName, setNewName] = useState("")

  const addName = (event) => {
    event.preventDefault() // prevent default action of submitting HTML forms

    // create object with new value
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject)) // concat returns new array
    setNewName("") // clear newName
  }

  // handle the text change in input
  const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => 
            <li key={person.name}>{person.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App