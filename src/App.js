import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Form from './components/Form/Form';
import BmiValueArea from './components/BmiValueArea/BmiValueArea';
import BmiInfo from './components/BmiInfo/BmiInfo';

function App() {

  function appTitle() {
    return <h1 className='App-title'>BODY MASS INDEX</h1>
  }

  return (  
    <div className="App container">
      {appTitle()}
      <Switch>
        <Route path='/' exact={true} component={Form} />
        <Route  path='/result' component={BmiValueArea}/>
        <Route path='/info' component={BmiInfo} />
      </Switch>
    </div>
  );
}

export default App;
