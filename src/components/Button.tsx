
type TypeButtonProp = {
    children:string
    typeInfo:string
    assigneNumHandler:(info:string)=>void
}


const Button = ({children,typeInfo, assigneNumHandler}:TypeButtonProp) => {



  return (
    <button onClick={()=>{assigneNumHandler(typeInfo)}}>{children}</button>
  )
}

export default Button