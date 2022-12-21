const ShowOutput = ({name, number}) => {
    return (<p>{name} {number}</p>)
  }

const Persons = ({persons, newSearch}) => {
    const personsToShow = (newSearch === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    return(personsToShow.map(name =>
      <ShowOutput key={name.name} name={name.name} number={name.number} />
      ))
}

export default Persons