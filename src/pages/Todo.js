import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Todo.css';
//import Calculator from "../../../calculatormf/src/Calculator";
const Calculator = React.lazy(()=> import("../../calculatormf/src/Calculator")) ;
// import { Calculator } from "calculatormf/Calculator";

// import Header from "../../../homemf/src/Header";
// import Footer from "../../../homemf/src/Footer";
// import UserForm from "../../../homemf/src/userForms";

 const TodoList = () => { 
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]); 

//TO ADD TODO ITEM
const addTodo = () => {
     if (todo.trim().length!==0) { 
        setTodos([...todos, todo]); 
        setTodo("");
        console.log("New task has been added");
     } else{
        alert('please enter a task')
     }
};
//TO REMOVE TODO ITEM
 const removeTodo = (index) => { 
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos); 
};
//TO ALLOW USER TO USE ENTER KEY 
const handleEnterKey = (e) =>{
    if (e.key ==="Enter"){
        addTodo(e);
        console.log("enter key is pressed");
    }
};
 return ( 
     <div className="todo">
         <h1>Todo List</h1> 
         <div>
         <input className="input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={handleEnterKey} />
         </div>
         
         <button className="button" onClick={addTodo}>Add Todo</button> 
         <ul> 
            <span className="todoResults">
                {todos.map((t, i) => ( 
                <li className="todoOutput" key={i}> 
                    {t} 
                    <button className="button" onClick={() => removeTodo(i)}>Remove</button> 
                </li> 
                ))}
            </span>
            
        </ul> 
        <Calculator/>
       
      </div> 
    ); 
}; 
export default TodoList;