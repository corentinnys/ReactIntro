
import React from 'react';



function TodoItem({ task, handleDelete }) {
    return (
      <li >
        {task}
        <button onClick={handleDelete} >Supprimer</button>
      </li>
    );
  }
  export default TodoItem;