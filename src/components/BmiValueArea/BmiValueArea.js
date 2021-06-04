import React from 'react';
import RotateButton from '../RotateButton/RotateButton';
import './BmiValueArea.css';

export default function BmiValueArea() {
  const [bmi, setBmi] = React.useState();

  React.useEffect(() => {
    setBmi(localStorage.getItem('result'))
  }, [bmi]);

  function handleBmiCategory(e) {
    if (e > 30)
      return <h3><strong> OBESE </strong> Your resul is obese. You should see a doctor. </h3>

    else if (e > 25 && e < 29.9)
      return <h3> <strong> OVERWEIGHT </strong> Your result is overweight. You should lost weight. </h3>

    else if (e > 18.5 && e < 24.9)
      return <h3> <strong> NORMAL </strong> Your result is fine. </h3>

    else
      return <h3> <strong> UNDERWEİGHT </strong> Your result is underweihgt. You should gain more weight.</h3>
  }

  return (
    <div className='container'>
      <RotateButton title='< Back' rotate='' />
      <h2 className='value'>
        {bmi}
      </h2>
      <div className='description'>
        {handleBmiCategory(bmi)}
      </div>
    </div>
  );
}