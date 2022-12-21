import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas',
                                          number: '397-154-1475'}
                                        
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(o => o.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const ShowOutput = ({name, number}) => {
    return (<p>{name} {number}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleChangeName}/>
        </div>
        <div>
          number: <input
              value={newNumber}
              onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
      {persons.map(name =>
        <ShowOutput key={name.name} name={name.name} number={name.number} />
        )}
    
    </div>
  )
}
export default App;
