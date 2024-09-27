import React from "react";
import { useState } from "react";

function App() {
  const [valorD, setValorD] = useState('')
  const [valorE, setValorE] = useState('')
  const [resultadoD, setResultadoD] = useState(null)
  const [resultadoE, setResultadoE] = useState(null)

  const converterDolar = () => {
    if (valorD === '') {
      alert('insira os valores')
      document.getElementById('valorD').focus()
      setResultadoD('')
    } else {
      const conversaoD = (parseFloat(valorD * 0.18)).toFixed(2)
      setResultadoD('USD: ' + conversaoD)
    }
  }

  const converterEuro = () => {
    if (valorE === ''){
      alert('insira os valores')
      document.getElementById('valorE').focus()
      setResultadoE('')
    }else{
      const conversaoE = (parseFloat(valorE * 0.16)).toFixed(2)
      setResultadoE('EUR: ' + conversaoE)
    }
  }
    

  return (
    <div className="container">
      <h2 className="mb-2 mt-3">conversor de dólar</h2>
      <label>informe o valor R$: </label><br />
      <input id="valorD" type="number" value={valorD} onChange={(e) => setValorD(e.target.value)} />
      <div>{resultadoD}</div>
      <button onClick={converterDolar} className="btn btn-primary mt-3 mb-3">Converter Dolar</button>
    <hr />
      <h2 className="mb-2">conversor de euro</h2>
      <label>informe o valor</label><br />
      <input id="valorE" type="number" value={valorE} onChange={(e) => setValorE(e.target.value)} />
      <div>{resultadoE}</div>
      <button onClick={converterEuro} className="btn btn-primary mt-3">Converter Euro</button>
    </div>
  );
}

export default App;
