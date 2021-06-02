import React from 'react';
import './App.css';
import Form from  './components/Form';

function App() {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const heightInputChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
    console.log(newHeight);
  };

const weightInputChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    console.log(newWeight);
  };

function appTitle() {
  return <h1 className='App-title'>BODY MASS INDEX</h1>
}

  return (
    <div className="App">
      {appTitle()}
      <Form
        heightInput={height}
        onHeightInputChange={(e) => heightInputChange(e)} 
        weightInput={weight}
        onWeightInputChange={(e) => weightInputChange(e)}
        addValue={() => {}}
      />
    </div>  
  );
}

export default App;
