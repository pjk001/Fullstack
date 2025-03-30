import {useState} from 'react'

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const Button = ({name, onClick}) => {
  return (
    <>
     <button onClick={onClick}>{name}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good - bad) / all} />
        <StatisticLine text="positive" value={good / all * 100 + "%"} />
        </tbody>
    </table>
  )
}

const App = () => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={handleGood} />
      <Button name="neutral" onClick={handleNeutral} />
      <Button name="bad" onClick={handleBad} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad}/>
    </div>
  )
}

export default App