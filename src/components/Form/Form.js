import React from 'react';
import './Form.css';
import { useHistory } from "react-router-dom";
import RememberCheckbox from '../RememberCheckbox/RememberCheckbox';

export default function Form() {
  const history = useHistory();
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleRememberChecked = (e) => {
    let initialWeight = 0;
    let initialHeight = 0;

    if (e) {
      initialWeight = localStorage.getItem('userWeight') || 0;
      initialHeight = localStorage.getItem('userHeight') || 0;
    }

    setWeight(initialWeight);
    setHeight(initialHeight);
  };

  const heightInputChange = (e) => {
    setHeight(e.target.value);
  };

  const weightInputChange = (e) => {
    setWeight(e.target.value);
  };

  const bmiCalculate = () => {
    const calculatedValue = Math.floor(weight / Math.pow(height, 2) * 10000);
    localStorage.setItem('result', calculatedValue);
    return  history.replace("/result")
  }

  const saveUserData = () => {
    if (!height && !weight) {
      return;
    }

    localStorage.setItem('userHeight', height);
    localStorage.setItem('userWeight', weight);

    bmiCalculate();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className='input-container'>
        <div className='input'>
          <input
            type="number"
            placeholder='Plase enter to yours weight'
            value={weight}
            onChange={weightInputChange}
            className="form-control"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder='Plase enter to yours height'
            value={height}
            onChange={heightInputChange}
            className="form-control"
          />
        </div>
      </div>
      <div className='button-container'>
        <button onClick={saveUserData} className="btn btn-outline-primary">
          Calculate !
      </button>
        <RememberCheckbox isMarked={handleRememberChecked}/>
      </div>
    </form>
  )
}