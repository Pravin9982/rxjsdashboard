import React, { useState } from "react";
import './Todo.css';


 const TodoList = () => { 
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]); 

const addTodo = () => {
     if (todo.trim().length!==0) { 
        setTodos([...todos, todo]); 
        setTodo("");
     } else{
        alert('please enter a task')
     }
};
 const removeTodo = (index) => { 
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos); 
};
 return ( 
     <div className="todo">
         <h1>Todo List</h1> 
         <div>
         <input className="input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
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
      </div> 
    ); 
}; 
export default TodoList;