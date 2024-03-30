import Button from "./components/Button"
import Input from "./components/Input"
import { useState } from "react"

function App() {
 
const buttonInfo:string[] = ["%",'CE','C','<-','7','8','9','x','4','5','6','-','1','2','3','+','+/-','0','.','=']


const[num,setNum] = useState<string>("0");

const assigneNumHandler=(info:string)=>{
setNum(info)
}



  return (
    <>
<div>
  <div>

  <p style={{margin:"-1px"}}>9</p>
  <Input output={num}/>

  </div>
  <div style={{width:"300px", height:"300px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
   {buttonInfo.map(info=>(
    
    <Button key={info} typeInfo={info} assigneNumHandler={assigneNumHandler}>{info}</Button>
   ))}
  </div>
</div>
    </>
  )
}

export default App
