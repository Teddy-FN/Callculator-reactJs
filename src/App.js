import React, { useState } from 'react'
import './App.css';
import { Container, FormControl } from '@material-ui/core'

function App() {

  // State Input Number
  const [defaultNumb] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)

  // State checkbox
  // const [checking, setChecking] = useState(true)

  // State Total Plus
  const [totalSum, setTotalSum] = useState(parseFloat(number1) + parseFloat(number2) + parseFloat(number3))
  // State Total Minus
  const [totalMinus, setTotalMinus] = useState(parseFloat(number1) - parseFloat(number2) - parseFloat(number3))
  // state total multiply
  const [totalMultiply, setTotalMultiply] = useState(parseFloat(number1) * parseFloat(number2) * parseFloat(number3))
  // state total division
  const [totalDivision, setTotalDivision] = useState(parseFloat(number1) / parseFloat(number2) / parseFloat(number3))


  const handlePlus = () => {
    setTotalSum(parseFloat(number1) + parseFloat(number2) + parseFloat(number3))
  }
  const handleMinus = () => {
    setTotalMinus(parseFloat(number1) - parseFloat(number2) - parseFloat(number3))
  }
  const handleMultiply = () => {
    setTotalMultiply(parseFloat(number1) * parseFloat(number2) * parseFloat(number3))
  }
  const handleDivision = () => {
    setTotalDivision(parseFloat(number1) / parseFloat(number2) / parseFloat(number3))
  }


  return (
    <Container className="App">
      <div className="calculator-wrapper">
        <h1 className="logo">Calculator</h1>
        <FormControl className="form">
          <div className="form-control">
            <input
              type="text"
              placeholder="Input Number"
              className="input-number"
              value={number1}
              onChange={e => setNumber1(e.target.value)} />
            <input type="checkbox" className="check-box" cheked />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Input Number"
              className="input-number"
              value={number2}
              onChange={e => setNumber2(e.target.value)}
            />
            <input type="checkbox" className="check-box" cheked />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Input Number"
              className="input-number"
              value={number3}
              onChange={e => setNumber3(e.target.value)}
            />
            <input type="checkbox" className="check-box" cheked />
          </div>
          <div className="btn-action-wrapper">
            <button className="btn" onClick={handlePlus}>+</button>
            <button className="btn" onClick={handleMinus}>-</button>
            <button className="btn" onClick={handleMultiply}>X</button>
            <button className="btn" onClick={handleDivision}>/</button>
          </div>
        </FormControl>
        <div className="result-wrapper">
          <h1>Hasil:</h1>
          <h1>{totalSum || totalMinus || totalMultiply || totalDivision || defaultNumb}</h1>
        </div>
      </div>

    </Container>
  );
}

export default App;
