import { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
    <Todolist />
    <input placeholder="bamo" />
    <button className='btn btn-success'>Add todo</button>
    <button className='btn btn-danger'>clear completed todo</button>
    <div>0 todos left</div>
    </>
  );
}

export default App;
