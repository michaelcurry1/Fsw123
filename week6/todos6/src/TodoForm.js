import {useContext, useState} from 'react';
import {UserContext} from './context'

function TodoForm(){
    const context= useContext(UserContext)
    const[value, setValue ] = useState("")
    const [errorM, setErrorM] = useState("")
    const sub = (e)=> {
        e.preventDefault()
        if(value === ""){
            setErrorM("No Todos Added")
            return 

        }else{
            context.addTodo(value)
            setValue("")
        }
    
    } 
    const handleChange = (event) =>{
            if(errorM)setErrorM("")
            setValue(event.target.value)   
          }  

    return(
        <>
        <form onSubmit={sub}>
            <input
            type= "text"
            value= {value}
            onChange={handleChange}
            />
            <button>ADD Todos</button>
        </form>
        </>
    )
}
export default TodoForm