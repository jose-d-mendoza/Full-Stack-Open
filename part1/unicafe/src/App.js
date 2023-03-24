import { useState } from "react"

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({sGood, sNeutral, sBad, sTotal}) => {
  if(sTotal > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good:" value={sGood}/>
        <StatisticLine text="Neutral:" value={sNeutral}/>
        <StatisticLine text="Bad:" value={sBad}/>
        <StatisticLine text="Average:" value={sTotal - sNeutral - (sBad * 2) / sTotal}/>
        <StatisticLine text="Positive:" value={((sGood / sTotal) * 100) + "%"}/>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

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
      <Button handler={() => incGood(good + 1)} text="Good"/>
      <Button handler={() => incNeutral(neutral + 1)} text="Neutral"/>
      <Button handler={() => incBad(bad + 1)} text="Bad"/>
      <Statistics sGood={good} sNeutral={neutral} sBad={bad} sTotal={total}/>
    </div>
  );
}

export default App;
