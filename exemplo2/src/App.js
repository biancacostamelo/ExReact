import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [result, setResult] = useState(null)

  function Calcular() {

    let imc = peso / (altura * altura)
    let mensagem = ''

    if(altura > 100){
      alert('Digite o valor corretamente')
      document.getElementById('Altura').focus()

    }else{
      if (imc < 18.5) {
        mensagem =   `${imc.toFixed(2)} Abaixo do peso`
      }
      else if (imc < 24.9) {
        mensagem =  `${imc.toFixed(2)} Peso Normal`
      }
      else if (imc < 29.9) {
        mensagem =  `${imc.toFixed(2)}  Acima do Peso`
      }
      else if (imc < 34.9) {
        mensagem =   `${imc.toFixed(2)}  Obesidade grau I`
      }
      else if (imc < 40) {
        mensagem =  `${imc.toFixed(2)}  Obesidade grau II`
      }
      else if (imc > 40) {
        mensagem =  `${imc.toFixed(2)}  Obesidade grau III `
      }
    }

    setResult (mensagem)
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 pb-4 meio2">
          <h1>Calcular IMC</h1>
        </div>
        <div className="col-sm-12 mb-4 meio2">
          <label for="Altura">Altura</label>
          <div><input type="number" id="Altura" value={altura}  onChange={(e) => setAltura(Number(e.target.value))} />
            <span>cm</span>
          </div>
        </div>
        <div className="col-sm-12 meio2">
          <label for="Peso">Peso</label>
          <div><input type="number" id="Peso" value={peso}   onChange={(e) => setPeso(Number(e.target.value))} />
            <span>kg</span>
          </div>
        </div>
        <div className="col-sm-12 pt-4  meio2">
          <button className="btn btn-primary botao" onClick={Calcular}> Calcular</button>
        </div>
        <div className="col-sm-12 pt-4  meio2">
          <div id="resultado">{result}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
