import React from 'react'

const TodoForm =({handleSubmit, setTodo, todo, edit}) => {
  return (
    
    <form onSubmit={handleSubmit} className='p-5 justify-between flex'>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}  className='w-96 rounded-lg' type="text" />
        <button className='bg-white rounded-lg px-4 py-1 font-bold hover:bg-sky-400 hover:border-white hover:border-2'>{edit ? "Edit" : "Add"}</button>
    </form>
    
  )
}

export default TodoForm