import React from 'react';

const ResultWrapper = ({totals, setTotals, reset}) => {
  const handleClick = () => {
    reset();
  };
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="tip-amount">{totals.tip}</span></h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="total">{totals.total}</span></h3>
        </div>
      </div>
      <button type="button" id="reset-button" className="reset-button" onClick={handleClick}>RESET</button>
    </div>
  );
}

export default ResultWrapper;
