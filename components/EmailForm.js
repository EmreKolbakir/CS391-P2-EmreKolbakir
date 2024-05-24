import React, { useState } from 'react';
import styles from '../styles/EmailForm.module.css';

export default function EmailForm() {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSendEmail = (event) => {
        event.preventDefault();
        const subject = 'Your Subject Here';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    return (
        <form onSubmit={handleSendEmail} className={styles.emailForm}>
            <label htmlFor="email">Enter recipient email and email body</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter recipient email"
                required
            />
            <input
                type="text"
                id="body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter email body"
                required
            />
            <button type="submit" disabled={!email || !body}>Send Email</button>
        </form>
    );
}
