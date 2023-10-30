import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Home() {
  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const[edit, setEdit] =useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (edit){
      const editTodo = todos.find((i) =>i.id === edit);
      const updateTodos = todos.map((td)=>td.id === editTodo.id
      ? (td ={id:td.id,todo})
      : {id: td.id, todo:td.todo}
        );
        setTodos(updateTodos);
        setEdit(0);
        setTodo("");
        return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) =>{
    const delTodo = todos.filter((to)=> to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) =>{
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEdit(id);

  };

  const completeTodo =(id)=>{
    console.log('terpanggil', id)
    const updateTodos = todos.map((todo)=>{
      if(todo.id === id){
        return{...todo, isComplete: !todo.isComplete};
      }
      return todo;
    });
    setTodos(updateTodos);
  }


  return (
    <div className=' justify-center items-center flex flex-col h-full mt-5'>
        <div className='w-[40%] max-h-full h-96 bg-sky-500'>
          <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          edit={edit}
          />
          <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          completeTodo={completeTodo}
          />
        </div>
    </div>
  )
}

export default Home