import React from 'react';
import './App.css';
import Component from './core-concepts/Component';
import CreateElement from './core-concepts/CreateElement';
import FunctionalComponent from './core-concepts/FunctionslComponent';
import PureComponent from './core-concepts/PureComponent';

function App() {
  return (
    <div className="App">
      <Component />
      <CreateElement />
      <FunctionalComponent />
      <PureComponent />
    </div>
  );
}

export default App;
