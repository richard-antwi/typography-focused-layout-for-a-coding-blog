// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
function Heading(props){

  var title ="this is some heading text";
  return(
    <h1>{props.title}</h1>
  );
}
function App() {
  return (
    <div className="App">

      <h1> hello world</h1>
      <Heading/>
      
    </div>
  );
}

export default App;
