import React from 'react';
import './Form.css';
import RememberCheckbox from '../RememberCheckbox/RememberCheckbox';

export default function Form({ heightInput, onHeightInputChange, weightInput, onWeightInputChange, addValue, rememberData }) {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function writeUserData() {
    if (!heightInput.trim() && !weightInput.trim()) {
      return 
    }  
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
        <RememberCheckbox isMarked={rememberData}/>
      </div>
    </form>
  )
}