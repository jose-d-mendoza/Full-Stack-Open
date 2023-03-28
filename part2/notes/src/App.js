/****** Renering Collections &
 * Key-Attribute &
 * Map &
 * Anti-Pattern: Array Indexes as Keys ******/

const App = (props) => {
  const {notes} = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/*notes.map((note, i) => NOT RECOMMENDED!!!
          <li key={i}> */
         notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
