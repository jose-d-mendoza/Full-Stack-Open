import { useState } from "react"

const App = () => {
  // Persons
  const [persons, setPersons] = useState([
    {name: "Arto Hellas", number: "040-1234567"},
    {name: "Ada Lovelace", number: "39-44-5323523"},
    {name: "Dan Abramov", number: "12-43-234345"},
    {name: "Mary Poppendieck", number: "39-23-6423122"}
  ])

  // add new name and number
  const addName = (event) => {
    event.preventDefault() // prevent default action of submitting HTML forms

    if(persons.find(person => person.name === newName)) {
      alert(newName + " is already added to phonebook")
    }
    else {
      // create object with new value
      const nameObject = {
        name: newName,
        number: newPhone
      }

      setPersons(persons.concat(nameObject)) // concat returns new array
    }

    setNewName("") // clear newName
    setNewPhone("") // clear newPhone
  }

  const [newName, setNewName] = useState("")
  // handle the text change in input
  const handleNameChange = (event) => setNewName(event.target.value)

  const [newPhone, setNewPhone] = useState("")
  // handle the value changing while typing
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  const [search, setSearch] = useState("")
  // name search
  const handleNameSearch = (event) => setSearch(event.target.value)

  const namesToShow = search === "" ? persons : persons.filter(person => (person.name.toUpperCase().includes(search.toUpperCase())))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with:<input value={search} onChange={handleNameSearch}/>
      </div>
      <h2>Add a New Person</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {namesToShow.map(person => {
            return (
            <li key={person.name}>{person.name} {person.number}</li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  )
}

export default App