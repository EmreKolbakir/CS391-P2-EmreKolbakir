import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Index.module.css';  // Importing the CSS module

export default function HomePage() {
    const router = useRouter();
    const [department, setDepartment] = useState('');
    const departments = ['Engineering', 'Human Resources', 'Finance', 'Marketing', 'Sales'];

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        router.push(`/home?username=${username}`);
    };

    // Define a date range (e.g., from January 1, 1900, to December 31, 2100)
    const minDate = "1924-01-01";
    const maxDate = "2024-12-31";

    return (
        <div className={styles.indexContainer}>
            <header className={styles.indexHeader}>
                <h1>Welcome to PlanWise</h1>
                <p>Welcome to PlanWise, your ultimate companion in organizing your daily tasks, managing your weekly programs, and keeping your most valuable links all in one place. Here at PlanWise, we believe in simplifying your life by providing a seamless platform where you can effortlessly create to-do lists, plan your weekly activities, and access a curated collection of useful resources.</p>
            </header>
            <main className={styles.indexMain}>
                <div className={styles.formBox}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type="text" name="username" placeholder="Enter your username" required minLength={3} maxLength={15} />
                        <input type="text" name="surname" placeholder="Enter your surname" required minLength={3} maxLength={15} />
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                            <option value="">Select your department</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <input type="text" name="address" placeholder="Enter your address" required minLength={5} maxLength={50} />
                        <input type="date" name="birthdate" required min={minDate} max={maxDate} />
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
