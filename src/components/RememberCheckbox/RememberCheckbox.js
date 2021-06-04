import React from 'react';
import './RememberCheckbox.css';

export default function RememberCheckbox({isMarked}) {
  return (
    <div className="remember-button"  >
      <input type="checkbox" onChange={(e) =>{
        isMarked(e.target.checked);
      }}/>
      <label className="label">Remember my data</label>
    </div>
  )
}