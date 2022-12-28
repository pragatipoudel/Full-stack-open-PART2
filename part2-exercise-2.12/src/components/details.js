import axios from "axios"
import { useEffect, useState } from "react"


const Details = ({country}) => {
    const [weather, setWeather] = useState();
    
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
            .then(response => {
                setWeather(response.data)

            })
    }, [country])
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.entries(country.languages).map(entry => (
                    <li key={entry[0]}>{entry[1]}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flag} />
            {weather && (
                <div>
                    <h2>Weather in {country.capital[0]}</h2>
                    <p>temperature {weather.main.temp} celsius</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <p>wind {weather.wind.speed} m/s</p>
                </div>
            )}

        </div>
)}

export default Details