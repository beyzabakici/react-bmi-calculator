import React from 'react';
import './App.css';
import Form from  './components/Form';

function App() {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [bmi, setBmi] = React.useState();

  const heightInputChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
  };

const weightInputChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
  };

function appTitle() {
  return <h1 className='App-title'>BODY MASS INDEX</h1>
}

function bmiCalculate(){
  const newBmi = Math.floor(weight / Math.pow(height, 2));
  setBmi(newBmi);
  console.log(bmi);
}

  return (
    <div className="App">
      {appTitle()}
      <Form
        heightInput={height}
        onHeightInputChange={(e) => heightInputChange(e)} 
        weightInput={weight}
        onWeightInputChange={(e) => weightInputChange(e)}
        addValue={() => bmiCalculate()}
      />
    </div>  
  );
}

export default App;
