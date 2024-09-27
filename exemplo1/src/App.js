import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Home from './paginas/home';

function App() {
  // const [n1, setN1] = useState("")
  // const [n2, setN2] = useState("")
  // const [n3, setN3] = useState("")
  // const [resultado, setResultado] = useState(null)

  // function somar() {
  //   setResultado(parseFloat(n1)+ parseFloat(n2))
  // }

  // function dividir() {
  //   setResultado(parseFloat(n1) / parseFloat(n2))
  // }

  // function subtrair() {
  //   setResultado(parseFloat(n1) - parseFloat(n2))
  // }

  // function multiplicar() {
  //   setResultado(parseFloat(n1) * parseFloat(n2))
  // }

  return (
    <Home/>
    /*<div className="App">
      <div className='row'>
        <div className='col-sm-6'>
          <input >
        </div>
        <div className='col-sm-6'></div>
      </div>
    </div>*/
  );
}

export default App;
