
// import Input from "./components/Input"
import { useState } from "react"

function App() {

  const [inputButton, setInputButton] = useState<number>(0)
  const [output, setOutput] = useState<number>()

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
    setOutput(inputButton.toString() + value);
    setInputButton(0)
  }


  return (
    <>
      <div>
        <div>
          <h2>{output}</h2>
          <h1>{inputButton}</h1>

          {/* <p style={{margin:"-1px"}}>9</p> */}
          {/* <Input/> */}

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
          <button onClick={() => outputHandler("*")}>/</button>
          <button onClick={() => outputHandler("*")}>+</button>
          <button >d</button>
          <button onClick={() => outputHandler("*")}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
