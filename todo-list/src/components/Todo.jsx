import React, { useState } from 'react'
import '../index.css'

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [task, setTask] = useState('')

  const getId = () => Math.floor(Math.random() * 1010)

  const handletask = () => {
    if (task.length > 0) {
      setTodo(todo =>
        todo.concat({
          text: task,
          id: getId()
        })
      )
      setTask('')
    }
  }
  const removeTask = id => {
    setTodo(todo => todo.filter(t => t.id !== id))
  }

  
  return (
    <div className='container'>
      <input
        className=' input-field'
        type='text'
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder='Add your task here '
      />
      <button className='text-xl' onClick={handletask}>
        Add task
      </button>

      <ul className='todolist'>
        {todo.map(({ text, id }) => {
          return (
            <li className='todo' key={id}  >
              {text}
              <button className='close' onClick={() => removeTask(id)}>
                {' '}
                delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo
