import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}
                                        
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(o => o.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const ShowName = ({name}) => {
    return (<p>{name}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
      {persons.map(name =>
        <ShowName key={name.name} name={name.name} />
        )}
    
    </div>
  )
}
export default App;
