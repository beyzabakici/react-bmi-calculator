import React from 'react';
import './App.css';
import Form from  './components/Form';

function App() {
  const [height, setHeight] = React.useState('0');
  const [weight, setWeight] = React.useState('0');
  const [heightInputChange, setHeightInputChange] = React.useState('');
  const [weightInputChange, setWeightInputChange] = React.useState('');


function appTitle() {
  return <h1 className='App-title'>BODY MASS INDEX</h1>
}

  return (
    <div className="App">
      {appTitle()}
      <Form
        heightInput={setHeight}
        onHeightInputChange={setHeightInputChange} 
        weightInput={setWeight}
        onWeightInputChange={setWeightInputChange}
        addValue={() => {}}
      />
    </div>  
  );
}

export default App;
