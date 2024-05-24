import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LiveClock from '../components/LiveClock';
import styles from '../styles/Home.module.css';  // Correct import path

export default function Home() {
  const router = useRouter();
  const { username } = router.query;
  const [storedUsername, setStoredUsername] = useState('');

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
      setStoredUsername(username);
    } else {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        setStoredUsername(savedUsername);
      }
    }
  }, [username]);

  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <h1>Welcome to PlanWise Home Page {storedUsername ? storedUsername : 'Guest'}</h1>
        <p>Welcome to Home Page. Here, you can manage your to-do lists, plan your weekly schedule, and access useful resources. Choose what suits you best and get organized with PlanWise.</p>
      </header>
      <main className={styles.homeMain}>
        <div className={styles.linkButtonsBox}>
          <div className={styles.linkButtons}>
            <Link href="/todo">
              <button className={styles.button}>My Todo Lists</button>
            </Link>
            <Link href="/program">
              <button className={styles.button}>My Weekly Programme</button>
            </Link>
            <Link href="/links">
              <button className={styles.button}>Quick Access</button>
            </Link>
          </div>
        </div>
        <div className={styles.liveClock}>
          <LiveClock />
        </div>
      </main>
    </div>
  );
}
