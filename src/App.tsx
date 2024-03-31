
// import Input from "./components/Input"
import { useState } from "react"

function App() {

  const [inputButton, setInputButton] = useState<number>(0);
  const [output, setOutput] = useState<number>();
  const [shadowOutput,setShadowOutput] = useState<number>()
  const [minus,setMinus] = useState<number>(0);
  const [signTypes,setSignTypes] = useState<string>("")


  const inputHandler = (value: number) => {
    if (inputButton === 0) {
      console.log(inputButton, value)
      setInputButton(inputButton + value)
    } else {
      console.log(inputButton, value)
      setInputButton(inputButton.toString() + value.toString())
    }
  }
  
  const outputHandler = (value: string) => {
    setShadowOutput(inputButton);
    setSignTypes(value)
    setOutput(inputButton + value);
    setInputButton(0)
  }
 

  const minusHandler = ()=>{
    if(shadowOutput === undefined){
      return
    }else{

      setMinus(shadowOutput - inputButton)
      
      setOutput(shadowOutput + " " + "-" + " " + inputButton)
      setInputButton(shadowOutput - inputButton)
    }
  }
  const plusHandler = ()=>{
    if(shadowOutput === undefined){
      return
    }else{

      setMinus(shadowOutput + inputButton)
      setOutput(shadowOutput + " " + "+" + " " + inputButton)
      setInputButton(+shadowOutput + +inputButton)
    }
  }
  const multiplyHandler = ()=>{
    if(shadowOutput === undefined){
      return
    }else{

      setMinus(shadowOutput * inputButton)
      setOutput(shadowOutput + " " + "*" + " " + inputButton)
      setInputButton(shadowOutput * inputButton)
    }
  }
  const divideHandler = ()=>{
    if(shadowOutput === undefined){
      return
    }else{

      setMinus(shadowOutput / inputButton)
      setOutput(shadowOutput + " " + "/" + " " + inputButton)
      setInputButton(shadowOutput / inputButton)
    }
  }

  const equalHandler = ()=>{
    if(signTypes === '-'){
      minusHandler()
    }
    if(signTypes === '+'){
      plusHandler()
    }
    if(signTypes === '*'){
      multiplyHandler()
    }
    if(signTypes === '/'){
      divideHandler()
    }
  }



  const clearHandler = ()=>{
setOutput();
setInputButton(0);

  }


  return (
    <>
      <div>
        <div>
          <h2>{output}</h2>
          <h1>{inputButton}</h1>


        </div>
        <div style={{ width: "300px", height: "300px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          <button onClick={() => inputHandler(7)}>7</button>
          <button onClick={() => inputHandler(8)}>8</button>
          <button onClick={() => inputHandler(9)}>9</button>
          <button onClick={() => inputHandler(4)}>4</button>
          <button onClick={() => inputHandler(5)}>5</button>
          <button onClick={() => inputHandler(6)}>6</button>
          <button onClick={() => inputHandler(1)}>1</button>
          <button onClick={() => inputHandler(2)}>2</button>
          <button onClick={() => inputHandler(3)}>3</button>
          <button onClick={() => inputHandler(0)}>0</button>
          <button onClick={() => outputHandler("-")}>-</button>
          <button onClick={() => outputHandler("*")}>*</button>
          <button onClick={() => outputHandler("/")}>/</button>
          <button onClick={() => outputHandler("+")}>+</button>
          <button onClick={()=>{clearHandler()}}>C</button>
          <button onClick={() => equalHandler()}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
