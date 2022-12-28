import Details from "./details"

const ShowOutput = ({name}) => {
    return (<p>{name}</p>)
}

const Countries = ({countries, newCountry}) => {
    if (newCountry === '') {
        return (<p>Please enter a country name</p>)
    }
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))
    const arrayLength = countriesToShow.length
    if (arrayLength >= 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (arrayLength < 10 && arrayLength > 1) {
        return(countriesToShow.map(country => 
            <ShowOutput key={country.name.common} name={country.name.common} />))
    } else if (arrayLength === 1) {
        return(<Details country={countriesToShow[0]} />)
    } else {
        return(<p>No matches, please try again</p>)
    }
}

export default Countries