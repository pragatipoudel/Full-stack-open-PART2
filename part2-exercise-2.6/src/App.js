import { useState } from "react";
import Filter from './Components/filter'
import Form from './Components/form'
import Persons from './Components/display'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={newSearch} handle={handleSearch} />
      <h2>add new</h2>
      <Form addName={addName} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )
}
export default App;
