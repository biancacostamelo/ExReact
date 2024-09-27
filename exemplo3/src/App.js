import React from 'react';
import { useState } from 'react';

function App() {

  const [grauC, setGrauC] = useState('')
  const [grauF, setGrauF] = useState('')
  const [resultadof, setResultadoc] = useState(null)
  const [resultadoc, setResultadof] = useState(null)

  const CalcularFahrenheit = () => {
    const valorc = parseFloat(grauC * 1.8 + 32).toFixed(1)
    setResultadof(valorc)
  }

  const CalcularCelsius = () => {
    const valorf = ((parseFloat(grauF) - 32) * (5 / 9)).toFixed(1)
    setResultadoc(valorf)
  }

  return (
    <div className="App">
        <h1>Celsius</h1>
        <label >Graus Celsius</label>
        <input type="number" id="grausCelsius" value={grauC} onChange={(e) => setGrauC(e.target.value)} />
        <div id="resultadoFah" > {resultadoc}</div>
        <button onClick={CalcularFahrenheit}>Calcular Fahrenheit</button>
      <hr />
        <h1>Fahrenheit</h1>
        <label  >Graus Fahrenheit</label>
        <input type="number" id="grausFahrenheit" value={grauF} onChange={(e) => setGrauF(e.target.value)} />
        <div id="resultadoCel" >{resultadof}</div>
        <button onClick={CalcularCelsius}>Calcular Celsius</button>
    </div>
  );
}

export default App;
