
import {useContext, useState} from 'react';
import {UserContext} from './context'

    

  

function Todo({todo}){
    const context= useContext(UserContext)
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [text, setText] = useState(todo.text);

    const toggleEdit = () => {
        setEdit(!edit);
        setText(todo.text)
        setError(false)
    };

    const handleEdit = (evt) => {
        (evt.target.value === "") ? setError(true) : setError(false)
        setText(evt.target.value);
    };

    const handleUpdate = (id, text) =>{
        context.editTodo(id, text);
        toggleEdit();
    }
    return(
        <div className = "todo5">
        <li>
            <input type = "checkbox" checked = {todo.isCompleted} onChange = {()=> context.completeTodo(todo.id)}/>
            <span style={{textDecoration:todo.isCompleted ? "line-through": ""}}>{todo.text}</span>
            <button onClick={()=> context.deleteTodo(todo.id)}>x</button>
        </li>
        {!edit ? (
            <div>
                <label style={{textDecoration:todo.isCompleted ? "line-through": ""}}for={todo.id}> {todo.text} </label>
            </div>
        ) : (
            <div>
                <input type="type" value={text}  
                // style={("150px")}
                 onChange={handleEdit}/>
            </div>  

        )}
        {!edit ? (
            <div>
                <button className="btnWk5" onClick ={() =>context.deleteTodo(todo.id)}>delete here</button>&nbsp;
                <button className="btnWk5" onClick ={() => toggleEdit()} disabled={todo.isCompleted}>edit here</button>
            </div>
        ) : (
            <div>
               <button className="btnWk5" disabled = {error} onClick={() => handleUpdate(todo.id, text)}>check here</button>
               <button className="btnWk5" onClick={() => toggleEdit()}>x</button> 
            </div>   
        )}
        </div>
    );
}
export default Todo