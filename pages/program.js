import React from 'react';
import WeeklyProgram from '../components/WeeklyProgram';
import styles from '../styles/Program.module.css';

export default function Program() {
    return (
        <div className={styles.container}>
            <WeeklyProgram />
        </div>
    );
}
