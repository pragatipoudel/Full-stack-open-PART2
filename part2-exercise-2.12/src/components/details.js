const Details = ({country}) => {
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
        </div>
)}

export default Details