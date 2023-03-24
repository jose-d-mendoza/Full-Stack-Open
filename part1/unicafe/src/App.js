import { useState } from "react"

const Statistics = (props) => {
  const good = props.sGood
  const neutral = props.sNeutral
  const bad = props.sBad
  const total = props.sTotal

  return (
    <div>
      <h1>Statistics</h1>
      <p>
        Good: {good} <br/>
        Neutral: {neutral} <br/>
        Bad: {bad} <br/>
        Average: {(total - neutral - (bad * 2)) / total} <br/>
        Positive: {(good / total) * 100}%
      </p>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incGood = (nGood) => {
    setGood(nGood)
    setTotal(nGood + neutral + bad)
  }

  const incNeutral = (nNeutral) => {
    setNeutral(nNeutral)
    setTotal(good + nNeutral + bad)
  }

  const incBad = (nBad) => {
    setBad(nBad)
    setTotal(good + neutral + nBad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => incGood(good + 1)}>Good</button>
      <button onClick={() => incNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => incBad(bad + 1)}>Bad</button>
      <Statistics sGood={good} sNeutral={neutral} sBad={bad} sTotal={total}/>
    </div>
  );
}

export default App;
