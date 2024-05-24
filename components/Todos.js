import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchData('todos');
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
