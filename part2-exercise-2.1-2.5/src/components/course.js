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

const Total = ({coursePart}) => {
    const exercise = coursePart.map((part) => (part.exercises))
    const sum = exercise.reduce((partialSum, a) => partialSum + a, 0)
    return (
    <p><strong>total of {sum} exercises</strong></p>
    )
}

const Course = (props) => (
<div>
    <Header courseName={props.course.name} />
    <Content coursePart={props.course.parts} />
    <Total coursePart={props.course.parts} />
</div>
)

export default Course