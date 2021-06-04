import React from 'react';
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
  //   Below 18.5	Underweight  Your result is underweihgt. You should gain more weight.
  // 18.5 – 24.9	Normal       Your result is fine.
  // 25.0 – 29.9	Overweight   Your result is overweight. You should lost weight.
  // 30.0 and above	Obese      Your resul is obese. You should see a doctor.
  return (
    <div className='container'>
      <h2 className='value'>
        {bmi}
      </h2>
      <div className='description'>
        {handleBmiCategory(bmi)}
      </div>
    </div>
  );
}