
import TodoItem from './TodoItem'




function TodoList({ tasks, handleDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} handleDelete={() => handleDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;