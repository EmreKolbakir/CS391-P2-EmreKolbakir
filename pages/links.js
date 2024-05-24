import React from 'react';
import EmailForm from '../components/EmailForm';
import Link from 'next/link';
import styles from '../styles/Links.module.css';

export default function Links() {
    return (
        <div className={styles.container}>
            <Link href="/home">
                <button className={styles.homeButton}>Home</button>
            </Link>
            <header>
                <h1>Useful Links and Quick e-mail Page</h1>
                <p>Explore quick access to your favorite platforms and send emails instantly. Stay connected effortlessly with just a click.</p>
            </header>
            <div className={styles.boxContainer}>
                <div className={styles.linksBox}>
                    <a href="https://github.com" target="_blank" className={styles.linkButton}>GitHub</a>
                    <a href="https://stackoverflow.com" target="_blank" className={styles.linkButton}>StackOverflow</a>
                    <a href="https://www.linkedin.com" target="_blank" className={styles.linkButton}>LinkedIn</a>
                    <a href="https://www.youtube.com" target="_blank" className={styles.linkButton}>YouTube</a>
                    <a href="https://www.discord.com" target="_blank" className={styles.linkButton}>Discord</a>
                    <a href="https://chat.openai.com" target="_blank" className={styles.linkButton}>ChatGPT</a>
                </div>
                <div className={styles.emailBox}>
                    <EmailForm />
                </div>
            </div>
        </div>
    );
}
