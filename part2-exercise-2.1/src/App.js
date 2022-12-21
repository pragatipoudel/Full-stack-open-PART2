const Header = (props) => {
  return (
      <h1>{props.courseName}</h1>
  )
}

const Part = ({part}) => {
  return (
    <li key={part.id}>{part.name} {part.exercises}</li>
  )
}


const Content = ({coursePart}) => {
  return (
    <ul>
      {coursePart.map(part => (
        <Part part={part} />
      ))}
    </ul>
  )
}

const Course = (props) => (
  <div>
  <Header courseName={props.course.name} />
  <Content coursePart={props.course.parts} />
  </div>
)


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id:1,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2,
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3,
    }
  ] }


  return (

    <div>
      <Course course={course} />
    </div>
)}


export default App;
