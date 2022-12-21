const Header = (props) => {
  return (
      <h1>{props.courseName}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}


const Content = ({coursePart}) => {
  return (
    <>
      {coursePart.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}

const Course = (props) => (
  <div>
    <Header courseName={props.course.name} />
    <Content coursePart={props.course.parts} />
    <Total coursePart={props.course.parts} />
  </div>
)

const Total = ({coursePart}) => {
    const exercise = coursePart.map((part) => (part.exercises))
    const sum = exercise.reduce((partialSum, a) => partialSum + a, 0)
    return (
      <p><strong>total of {sum} exercises</strong></p>
    )
}

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
