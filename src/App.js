import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [bmi, setBmi] = React.useState();
  const [remember, setRemember] = React.useState(false);

  React.useEffect(() => {

  },[remember]);

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
  }

  return (
    <div className="App">
      {appTitle()}
      <Form
        heightInput={
          remember ? JSON.parse(localStorage.getItem('userHeight')) : height
        }
        onHeightInputChange={(e) => heightInputChange(e)}
        weightInput={
          remember ? JSON.parse(localStorage.getItem('userWeight')) : weight
        }
        onWeightInputChange={(e) => weightInputChange(e)}
        addValue={() => bmiCalculate()}
        rememberData={() => remember ? setRemember(false): setRemember(true)}
      />
    </div>
  );
}

export default App;
