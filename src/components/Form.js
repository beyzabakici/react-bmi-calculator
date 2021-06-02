import React from 'react';
import './Form.css';
import SwitchButton from './SwitchButton/SwitchButton';

export default function Form({ heightInput, onHeightInputChange, weightInput, onWeightInputChange, addValue }) {
  const [isGlobalValue, setIsGlobalValue] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
        <button onClick={addValue} className="btn btn-outline-primary">
          Calculate!
      </button>
        <SwitchButton />
      </div>
    </form>
  )
}