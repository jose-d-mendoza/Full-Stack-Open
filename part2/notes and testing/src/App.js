/****** Renering Collections &
 * Key-Attribute &
 * Map &
 * Anti-Pattern: Array Indexes as Keys &
 * Refactoring Modules ******/

import Note from "./components/Note"

/* const Note = ({note}) => {
  return (
    <li>{note.content}</li>
  )
} */

const App = ({notes}) => {
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
    </div>
  )
}

export default App
