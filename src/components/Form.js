import React from 'react';
import './Form.css';
import RememberButton from './RememberButton/RememberButton';

export default function Form({ heightInput, onHeightInputChange, weightInput, onWeightInputChange, addValue, rememberData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function writeUserData() {
    localStorage.setItem('userHeight', JSON.stringify(heightInput));
    localStorage.setItem('userWeight', JSON.stringify(weightInput));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className='input-container'>
        <div className='input'>
          <input
            type='number'
            placeholder='Plase enter to yours weight'
            value={weightInput}
            onChange={onWeightInputChange}
            className="form-control"
          />
        </div>
        <div>
          <input
            type='number'
            placeholder='Plase enter to yours height'
            value={heightInput}
            onChange={onHeightInputChange}
            className="form-control"
          />
        </div>
      </div>
      <div className='button-container'>
        <button onClick={addValue, writeUserData} className="btn btn-outline-primary">
          Calculate !
      </button>
        <RememberButton isMarked={rememberData}/>
      </div>
    </form>
  )
}