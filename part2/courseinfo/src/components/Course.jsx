const Header = ({course}) => {
  return (
    <>
      <h2>{course.name}</h2>
    </>
  )
}


const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}


const Content = ({course}) => {
  return (
    <>
      {course.parts.map(part => {
        return <Part key={part.id} part={part.name} exercises={part.exercises} />
      })}
    </>
  )
}


const Total = ({course}) => {
  return (
    <>
      <h3>total of {course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises, 0
      )} exercises</h3>
    </>
  )
}


const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Course