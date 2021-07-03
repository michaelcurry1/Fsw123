import Todo from "./Todo";

function TodoList({todos, completeTodo, deleteTodo}){
    const lists = todos.map((todo)=>{
        return <Todo key= {todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    })
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}
export default TodoList

// import React from "react"

// class Todo4List extends React.Component{
//     constructor(props) {
//         super(props)
// }
//     completeTodo() {
//         this.props.completeTodo(this.props.completeTodo(this.props.id));
//     }

//     deleteTodo() {
//         this.props.deleteTodo(this.props.deleteTodo(this.props.id));
//     }

//     render() {
//         let styleComplete = {textDecorationLine: 'none'}
//         if (this.props.isCompleted){
//             styleComplete = {textDecorationLine: 'line-through'}
//         }
//         return (
//             <div className ="todo3Div">
//                 <div>
//                     <input
//                     type="checkbox"
//                     className= "cb2"
//                     id={this.props.id}
//                     onClick={() => {this.completeTodo()}}
//                     checked={this.props.isCompleted}
//                     />
//                 </div>
//                 <div>
//                     <label style={styleComplete} for={this.props.id}> {this.props.text} </label>
//                 </div>
//                 <div>
//                     <button className="btn3" onClick={()=>{this.deleteTodo()}}>x</button>
//                 </div>

//             </div>
//         )
//     }
// }
 