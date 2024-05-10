import React from 'react';

const DataWrapper = ({ reset, bill, setBill, people, setPeople, setPercentage, percentage }) => {
  const handlePercentageChange = (value,) => {
    console.log(value);
    setPercentage(value);

    if (document.getElementById('custom-percentage-button').value !== '' && parseInt(document.getElementById('custom-percentage-button').value) !== value) {
      document.getElementById('custom-percentage-button').value = ''
    }
  };

  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input className="input-bill" id="input-bill" placeholder="0" type="number" value={bill} min="0" onChange={(e) => setBill(e.target.value)} />
      </label>
      <h2>Select Tip %</h2>
      <ul>
        <li id="percentage-5">
          <button type="button" className={`percentage-button ${percentage === 5 ? 'active' : ''}`} onClick={() => handlePercentageChange(5)}>5%</button>
        </li>
        <li id="percentage-10">
          <button type="button" className={`percentage-button ${percentage === 10 ? 'active' : ''}`} onClick={() => handlePercentageChange(10)}>10%</button>
        </li>
        <li id="percentage-15">
          <button type="button" className={`percentage-button ${percentage === 15 ? 'active' : ''}`} onClick={() => handlePercentageChange(15)}>15%</button>
        </li>
        <li id="percentage-25">
          <button type="button" className={`percentage-button ${percentage === 25 ? 'active' : ''}`} onClick={() => handlePercentageChange(25)}>25%</button>
        </li>
        <li id="percentage-50">
          <button type="button" className={`percentage-button ${percentage === 50 ? 'active' : ''}`} onClick={() => handlePercentageChange(50)}>50%</button>
        </li>
        <li>
          <input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" onChange={(e) => handlePercentageChange(parseInt(e.target.value))} />
        </li>
      </ul>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input id="input-people" className="input-people" placeholder="1" type="number" value={people} min="1" onChange={(e) => setPeople(e.target.value)} />
      </label>
    </div>
  );
};

export default DataWrapper;
