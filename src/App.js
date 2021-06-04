import React from 'react';
import './App.css';
import Form from './components/Form/Form';

function App() {

  function appTitle() {
    return <h1 className='App-title'>BODY MASS INDEX</h1>
  }

  return (
    <div className="App container">
      {appTitle()}
      <Form />
    </div>
  );
}

export default App;
