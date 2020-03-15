import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css'
import ButtonComponent from './components/button-component'
import ReactListDemoComponent from './components/react-list-demo'
import RequestDemo from './api-demo'

class App extends Component {
  render() {
    return (
      <div className="Div">
        {/* <ReactListDemoComponent /> */}
        <RequestDemo/>
      </div>
    );
  }
}
export default App;
