import React, { Component } from 'react';
import Content from './Content';
import './App.css';

let x = 70;
class App extends Component {
 render() {
 return (
 <div className="App">
 Hello World
 <Content />
 </div>
 );
 }
}
export default App;
