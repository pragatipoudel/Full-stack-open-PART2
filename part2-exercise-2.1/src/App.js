const Header = (props) => {
  return (
      <h2>{props.courseName}</h2>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (

    <div>
      <h1>Half Stack application development</h1>
      {courses.map((course)=>(
        <Course key={course.id} course={course} />
      ))}
    </div>
)}


export default App;
