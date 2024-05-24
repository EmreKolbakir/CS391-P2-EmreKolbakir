import React, { useState, useEffect } from 'react';
import { fetchData, createData, updateData, deleteData } from '../services/api';
import styles from '../styles/Todo.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState({ academical: [], daily: [], work: [] });

  useEffect(() => {
    const getTodos = async () => {
      try {
        const academical = await fetchData('academical');
        const daily = await fetchData('daily');
        const work = await fetchData('work');
        setTodos({ academical, daily, work });
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    getTodos();
  }, []);

  const addTodo = async (category, text) => {
    try {
      const newTodo = await createData(category, { task: text, completed: false });
      setTodos((prevTodos) => ({
        ...prevTodos,
        [category]: [...prevTodos[category], newTodo],
      }));
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const toggleTodo = async (category, id) => {
    try {
      const updatedTodo = todos[category].find((todo) => todo.id === id);
      updatedTodo.completed = !updatedTodo.completed; // Update the completed status

      await updateData(category, id, { completed: updatedTodo.completed });

      setTodos((prevTodos) => ({
        ...prevTodos,
        [category]: prevTodos[category].map((todo) =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
        ),
      }));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const clearCompleted = async (category) => {
    try {
      const completedTodos = todos[category].filter((todo) => todo.completed);
      await Promise.all(completedTodos.map((todo) => deleteData(category, todo.id)));
      setTodos((prevTodos) => ({
        ...prevTodos,
        [category]: prevTodos[category].filter((todo) => !todo.completed),
      }));
    } catch (error) {
      console.error('Failed to clear completed todos:', error);
    }
  };

  return (
    <div className={styles.todoLists}>
      {['academical', 'daily', 'work'].map((category) => (
        <div key={category} className={styles.todoList}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <input
            type="text"
            placeholder={`Add a new ${category} task...`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addTodo(category, e.target.value);
                e.target.value = '';
              }
            }}
          />
          <ul>
            {todos[category].map((todo) => (
              <li
                key={todo.id}
                className={todo.completed ? styles.completed : ''}
                onClick={() => toggleTodo(category, todo.id)}
              >
                {todo.task}
              </li>
            ))}
          </ul>
          <button onClick={() => clearCompleted(category)}>Clear Completed</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
