import { useEffect, useState } from "react";
import Filter from './Components/filter'
import Form from './Components/form'
import Persons from './Components/display'
import axios from "axios";
import noteService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
    noteService
      .create(nameObject)
      .then (response => {
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      })
    }
  
  const handleDelete = (id) => {
    noteService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
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
      <Persons persons={persons} newSearch={newSearch} handleDelete={handleDelete}/>
    </div>
  )
}
export default App;
