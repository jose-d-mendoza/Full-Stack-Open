/*
 * a - Rendering a Collection, Modules: 
 * Renering Collections &
 * Key-Attribute &
 * Map &
 * Anti-Pattern: Array Indexes as Keys &
 * Refactoring Modules
 * 
 * b - Forms:
 * Controlled Component
*/

import { useState } from "react"
import Note from "./components/Note"

/* const Note = ({note}) => {
  return (
    <li>{note.content}</li>
  )
} */

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (event) => {
    event.preventDefault()
    console.log("Button clicked", event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/*notes.map((note, i) => NOT RECOMMENDED!!!
          <li key={i}> */}
        {notes.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
