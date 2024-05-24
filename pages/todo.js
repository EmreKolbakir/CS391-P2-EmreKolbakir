import React from 'react';
import TodoList from '../components/TodoList';
import Link from 'next/link';
import styles from '../styles/Todo.module.css';  // Correct import path

export default function Todo() {
    return (
        <div className={styles.todoContainer}>
            <Link href="/home">
                <button className={styles.homeButton}>Home</button>
            </Link>
            <header className={styles.todoHeader}>
                <h1>My Todo Lists</h1>
                <p>Keep track of your tasks with ease. Add, complete, or remove tasks to stay organized across different areas of your life.</p>
                <ul>
                    <li>To add a task, type it into the appropriate field and press &apos;Enter&apos;.</li>
                    <li>Click on the completed task to select it, then click the &quot;Clear List&quot; button to remove all completed tasks from the list.</li>
                </ul>
            </header>
            <main className={styles.todoMain}>
                <TodoList />
            </main>
        </div>
    );
}
