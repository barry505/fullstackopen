import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <tr><StatisticLine text='good' value={good} /></tr>
        <tr><StatisticLine text='neutral' value={neutral} /></tr>
        <tr><StatisticLine text='bad' value={bad} /></tr>
        <tr><StatisticLine text='all' value={all} /></tr>
        <tr><StatisticLine text='average' value={(good + -(bad)) / (good + neutral + bad)} /></tr>
        <tr><StatisticLine text='positive' value={good / (good + neutral + bad)} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incGood = () => setGood(good + 1)
  const incNeutral = () => setNeutral(neutral + 1)
  const incBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={incGood} text='good' />
      <Button handleClick={incNeutral} text='neutral' />
      <Button handleClick={incBad} text='bad' />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        />
    </div>

  )

}

export default App