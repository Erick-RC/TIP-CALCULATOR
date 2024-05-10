import React, { useEffect, useState } from 'react';
import Header from './components/Headers';
import DataWrapper from './components/DataContainer';
import ResultWrapper from './components/Results';
import './index.css';

const App = () => {

  const [people, setPeople] = useState('')
  const [bill, setBill] = useState('')
  const [percentage, setPercentage] = useState(0)
  const [totals, setTotals] = useState({ tip: 0, total: 0 })

  const reset = () => {
    setBill(0);
    setPeople(0);
    setPercentage(0);
    setTotals({ tip: 0, total: 0 });
  };
  
  useEffect(() => {
    if (people > 0 && percentage > 0 && bill > 0) {
      let tip = (bill * (percentage / 100)) / people
      let total = (bill *(1+ percentage/100)) / people

      tip = tip.toFixed(2);
      total = total.toFixed(2);
  
      setTotals({ tip: tip, total: total });
    }
  }, [bill, people, percentage])


  return (
    <div className="app">
      <Header />
      <div className="general-wrapper">
        <DataWrapper people = {people} setPeople={setPeople}
         bill = {bill} setBill={setBill}
         percentage = {percentage} setPercentage = {setPercentage}
         reset = {reset}
         />
        <ResultWrapper
        totals = {totals} setTotals={setTotals}
        reset = {reset}
        />
      </div>
    </div>
  );
}

export default App;

