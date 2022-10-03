import { useState,useRef,useEffect} from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from 'uuid';
import './Todolist.css'
// App start
function App() {
  // destucturing 
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  // localstorage key
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  // get data
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(storedTodos) setTodos(storedTodos);
  },[]);
  // set data
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  // toggle todo

function toggleTodo (id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete;
  console.log(newTodos.indexOf(todo))
  setTodos(newTodos)
}

function removeTodo (id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  const tobeRemoved = newTodos.indexOf(todo)
  newTodos.splice(tobeRemoved,1)
  setTodos(newTodos)
}



  // event add todo
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos,{id : uuidv4(), name : name, complete : false}];
    })

    todoNameRef.current.value = null;

  }

 function handleClear() {
  const newTodos = todos.filter(todo => !todo.complete);
  setTodos(newTodos);
 }

  return (
    <div className="all">
    <div className='input-div'>
    <input ref={todoNameRef} placeholder="bamo" />
    <button  onClick={handleAddTodo} className='add-btn'>Add todo</button>
    </div>
   <div className='todo-list'> <Todolist todos = {todos} toggleTodo = {toggleTodo} removeTodo={removeTodo} /></div>
   <div className='clear-div'><button className='clear-btn' onClick={handleClear}>clear completed</button></div> 
    <div className='todo-left-div'><span className='todo-left'>({todos.filter(todo => !todo.complete).length}) todos left </span></div>
    </div>
  );
}

export default App;
