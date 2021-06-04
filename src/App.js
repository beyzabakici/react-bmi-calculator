import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [bmi, setBmi] = React.useState();
  const [remember, setRemember] = React.useState(false);

  const heightInputChange = (e) => {
    setHeight(e.target.value);
  };

  const weightInputChange = (e) => {
    setWeight(e.target.value);
  };

  function appTitle() {
    return <h1 className='App-title'>BODY MASS INDEX</h1>
  }

  function bmiCalculate() {
    const newBmi = Math.floor(weight / Math.pow(height, 2) * 10000);
    setBmi(newBmi);
    console.log(bmi);
  }
  function handleRemember() {
    !remember ? setRemember(true) : setRemember(false)
  }


  return (
    <div className="App container">
      {appTitle()}
      <Form
        heightInput={
          remember ? JSON.parse(localStorage.getItem('userHeight')) : height
        }
        onHeightInputChange={(e) => {
          remember ? setHeight(localStorage.getItem('userHeight')) :  heightInputChange(e);
        }}
        weightInput={
          remember ? JSON.parse(localStorage.getItem('userWeight')) : weight
        }
        onWeightInputChange={(e) => {
          remember ? setWeight(localStorage.getItem('userWeight')) :  weightInputChange(e);
        }}
        addValue={() => bmiCalculate()}
        rememberData={() => handleRemember()}
      />
    </div>
  );
}

export default App;
