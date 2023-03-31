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
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {/*notes.map((note, i) => NOT RECOMMENDED!!!
          <li key={i}> */}
        {/*notes.map(note =>
          <Note key={note.id} note={note}/>
        )*/}
        {notesToShow.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
