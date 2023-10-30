import React from 'react';

const TodoList = ({ todos, handleDelete, handleEdit, completeTodo }) => {
  return (
    <div className="px-5">
      {todos.map((td) => (
        <div className="bg-sky-300 flex justify-between px-2 py-1 rounded-lg mt-2">
          <div>
            {/* <input type="checkbox"></input> */}
            <span className={td.isComplete ? 'line-through ml-2' : 'ml-2'} key={td.id}>
              {' '}
              {td.todo}{' '}
            </span>
          </div>
          <div>
            <button onClick={() => completeTodo(td.id)} className="bg-lime-500 rounded-lg px-2">
              Done
            </button>

            <button onClick={() => handleEdit(td.id)} className="bg-amber-400 rounded-lg px-2 ml-1">
              Edit
            </button>
            <button onClick={() => handleDelete(td.id)} className="bg-red-500 rounded-lg px-2  ml-1">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
