const Persons = ({persons}) => {
    return (
        <div>
            <ul>
                {persons.map(person => {
                    return (
                        <li key={person.name}>{person.name} {person.number}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Persons