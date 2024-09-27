import React, { useState } from 'react';
import './App.css';

function App() {
  const [capital, setCapital] = useState(0)
  const [taxa, setTaxa] = useState(0)
  const [periodos, setPeriodos] = useState(0)
  const [tipoTaxa, setTipoTaxa] = useState('mensal')
  const [montante, setMontante] = useState(null)
  const [juros, setJuros] = useState(null)

  const calcularMontante = () => {
    const taxaDecimal = tipoTaxa === 'anual' ? taxa / 100 / 12 : taxa / 100
    const numPeriodos = tipoTaxa === 'anual' ? periodos * 12 : periodos
    const valorMontante = capital * Math.pow(1 + taxaDecimal, numPeriodos)
    const valorJuros = valorMontante - capital

    setMontante(valorMontante.toFixed(2))
    setJuros(valorJuros.toFixed(2))
  };

  return (
    <div className="App">
      <div className="formulario">
        <label>
          Capital Inicial:
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Taxa de Juros (%):
          <input
            type="number"
            value={taxa}
            onChange={(e) => setTaxa(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Períodos:
          <input
            type="number"
            value={periodos}
            onChange={(e) => setPeriodos(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Tipo de Taxa:
          <select
            value={tipoTaxa}
            onChange={(e) => setTipoTaxa(e.target.value)}
          >
            <option value="mensal">Mensal</option>
            <option value="anual">Anual</option>
          </select>
        </label>
        <button onClick={calcularMontante}>Calcular</button>
      </div>
      {montante !== null && (
        <div className="resultado">
          <p>Montante: R$ {montante}</p>
          <p>Juros: R$ {juros}</p>
        </div>
      )}
    </div>
  );
}

export default App;
