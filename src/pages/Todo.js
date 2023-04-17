import React, { useState, Suspense, useEffect} from "react";
import ReactDOM from "react-dom";
import './Todo.css';

const Calculatorcom = React.lazy(()=> import("calculatormf/Calculator")) ;
//import Calculator from "../../../calculatormf/src/Calculator";
// import { Calculator } from "calculatormf/Calculator";

// import Header from "../../../homemf/src/Header";
// import Footer from "../../../homemf/src/Footer";
// import UserForm from "../../../homemf/src/userForms";

const TodoList = () => { 
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]); 
//     const [Calculator, setCalculator] = useState(null);
//  useEffect(() => {
       
//          // Dynamically import the Calculator component
//          import("http://localhost:3002/remoteEntry.js")
//            .then((remote) => remote.calculatormf["./Calculator"])
//            .then((Calculator) => {
//              // Set the Calculator component in the state
//              setCalculator(Calculator);
//              console.log('calculator component called ')
//            })
//            .catch((error) => {
//              // Handle any errors
//              console.error(error);
//              console.log('error emited')
//            });
//        }, []);
     
//        if (!Calculator) {
//          // Render a loading state while the Calculator component is being loaded
//          return <div>Loading...</div>;
//        }

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
        <Suspense fallback={<span>Loading...</span>}>
         <Calculatorcom/>
        </Suspense>
       
      </div> 
    ); 
}; 
export default TodoList;