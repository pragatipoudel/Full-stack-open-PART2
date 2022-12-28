import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/display';


const App = () => {
  const[countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChangeCountry = (event) => {
    setNewCountry(event.target.value)
  }


  return (
    <div>
      find countries: <input value={newCountry} onChange={handleChangeCountry} />
      <Countries countries={countries} newCountry={newCountry} setNewCountry={setNewCountry}/>
    </div>
  )
}
export default App;
