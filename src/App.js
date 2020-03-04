import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css'
import ButtonComponent from './components/buttonComponent'
import ReactListDemoComponent from './components/react-list-demo'

class App extends Component {
  render() {
    return (
      <div className="Div">
        <ReactListDemoComponent />
      </div>
    );
  }
}
export default App;
