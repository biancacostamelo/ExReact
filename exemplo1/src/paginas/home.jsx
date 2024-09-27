import React from "react"
import { useState } from "react"

function Home() {
    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [resultado, setResultado] = useState(null)
//    const [areaResultado, setAreaResultado] = useState('')

    function somar() {
        setResultado(parseFloat(n1) + parseFloat(n2))
    }

    function dividir() {
        setResultado(parseFloat(n1) / parseFloat(n2))
    }

    function subtrair() {
        setResultado(parseFloat(n1) - parseFloat(n2))
    }

    function multiplicar() {
        setResultado(parseFloat(n1) * parseFloat(n2))
    }
    return (
           <div>
               <p> <input type="number" id="n1" placeholder="digite o primeiro número" value={n1} onChange={(e) => setN1(e.target.value)}/></p>
               <p> <input type="number" id="n2" placeholder="digite o segundo número" value={n2} onChange={(e) => setN2(e.target.value)}/></p>
               <button onClick={somar}>+</button>
               <button onClick={dividir}>/</button>
               <button onClick={subtrair}>-</button>
               <button onClick={multiplicar}>*</button>
               <div className="resultado">{resultado}</div>
           </div>
    )

}
export default Home