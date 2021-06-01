import React from 'react';
import SwitchButton from './SwitchButton/SwitchButton';

export default function Form({ heightInput, onHeightInputChange, weightInput, onWeightInputChange, addValue }) {
  const [isGlobalValue, setIsGlobalValue] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
      <input
        className='input'
        type="number"
        placeholder='Plase enter to yours weight'
        value={weightInput}
        onChange={onWeightInputChange}
        className="form-control"
      />
      <input
        className='input'
        type="number"
        value={heightInput}
        onChange={onHeightInputChange}
        className="form-control"
      />
      <button onClick={addValue} className="btn btn-danger">
        Calculate!
      </button>
      <SwitchButton />
    </form>
  )
}