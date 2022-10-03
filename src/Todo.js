import React from 'react'

export default function Todo({ todo, toggleTodo,removeTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  function handleRemove () {
      removeTodo(todo.id)
  }
  
  return (
    <div className='todo'>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
      <button className='remove-btn' onClick={handleRemove}>remove</button>
    </div>
  )
}