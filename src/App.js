import React, { useState } from 'react'
import './App.css';
import { Container, FormControl } from '@material-ui/core'

function App() {

  // State Input Number
  const [defaultNumb] = useState(0)
  const [number1, setNumber1] = useState('')
  const [number3, setNumber3] = useState('')
  const [number2, setNumber2] = useState('')

  // State checkbox
  const [checking, setChecking] = useState(true)
  const [checkingInput2, setCheckingInput2] = useState(true)
  const [checkingInput3, setCheckingInput3] = useState(true)

  // State disable Input
  const [disabledInput, setDisabledInput] = useState(false)
  const [disabledInput2, setDisabledInput2] = useState(false)
  const [disabledInput3, setDisabledInput3] = useState(false)


  // State Total Plus
  const [totalSum, setTotalSum] = useState(parseInt(number1) + parseInt(number2) + parseInt(number3))
  // State Total Minus
  const [totalMinus, setTotalMinus] = useState(parseInt(number1) - parseInt(number2) - parseInt(number3))
  // state total multiply
  const [totalMultiply, setTotalMultiply] = useState(parseInt(number1) * parseInt(number2) * parseInt(number3))
  // state total division
  const [totalDivision, setTotalDivision] = useState(parseInt(number1) / parseInt(number2) / parseInt(number3))


  // Function Aritmatik
  const handlePlus = () => {
    setTotalSum(parseFloat(number1) + parseFloat(number2) + parseFloat(number3))
    setTotalMinus('')
    setTotalMultiply('')
    setTotalDivision('')
  }

  const handleMinus = () => {
    console.log("HANDLE  MINUS", parseInt(number1) - parseInt(number2) - parseInt(number3))
    setTotalMinus(
      parseInt(number1) - parseInt(number2) - parseInt(number3)
    )
    setTotalSum('')
    setTotalMultiply('')
    setTotalDivision('')
  }

  const handleMultiply = () => {
    console.log("HANDLE  MULTI", parseInt(number1) * parseInt(number2) * parseInt(number3))
    setTotalMultiply(
      parseInt(number1) * parseInt(number2) * parseInt(number3)
    )
    setTotalSum('')
    setTotalMinus('')
    setTotalDivision('')
  }

  const handleDivision = () => {
    console.log("HANDLE  DIVISION", parseInt(number1) / parseInt(number2) / parseInt(number3))
    setTotalDivision(
      parseInt(number1) / parseInt(number2) / parseInt(number3)
    )
    setTotalSum('')
    setTotalMinus('')
    setTotalMultiply('')
  }


  // Functiona disable Input
  const handleCheking = e => {
    setChecking(e.target.checked)
    setChecking ? setDisabledInput(true) : setDisabledInput(false)
    setNumber1(0)
  }

  const handleCheckingInput = e => {
    setCheckingInput2(e.target.checked)
    setCheckingInput2 ? setDisabledInput2(true) : setDisabledInput2(false)
    setNumber2(0)
  }

  const handleDisableLastInput = e => {
    setCheckingInput3(e.target.checked)
    setCheckingInput3 ? setDisabledInput3(true) : setDisabledInput3(false)
    setNumber3(0)
  }

  return (
    <Container className="App">
      <div className="calculator-wrapper">
        <h1 className="logo">Calculator</h1>
        <FormControl className="form">
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Number"
              className="input-number"
              value={number1}
              onChange={e => setNumber1(e.target.value)}
              disabled={disabledInput}
            />
            <input
              type="checkbox"
              className="check-box"
              checked={checking}
              onChange={handleCheking}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Number"
              className="input-number"
              value={number2}
              onChange={e => setNumber2(e.target.value)}
              disabled={disabledInput2}
            />
            <input
              type="checkbox"
              className="check-box"
              checked={checkingInput2}
              onChange={handleCheckingInput}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Number"
              className="input-number"
              value={number3}
              onChange={e => setNumber3(e.target.value)}
              disabled={disabledInput3}
            />
            <input
              type="checkbox"
              className="check-box"
              checked={checkingInput3}
              onChange={handleDisableLastInput}
            />
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