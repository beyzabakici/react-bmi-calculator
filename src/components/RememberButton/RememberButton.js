import React from 'react';
import './RememberButton.css';

export default function RememberButton({isMarked}) {
  const [check, setCheck] = React.useState(false)
  return (
    <div className="remember-button"  >
      <input type="checkbox" onChange={() =>{
        if(!check){
          setCheck(true)
          isMarked()
          return
        }
        setCheck(false)
      }}/>
      <label className="label">Remember my data</label>
    </div>
  )
}