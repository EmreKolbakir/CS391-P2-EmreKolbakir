import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchData, createData, updateData, deleteData } from '../services/api';
import styles from '../styles/Program.module.css';

export default function WeeklyProgram() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hoursOfDay = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];

    const [events, setEvents] = useState({});

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchData('events');
                const eventsObj = data.reduce((acc, event) => {
                    acc[`${event.day}_${event.hour}`] = { title: event.title, id: event.id };
                    return acc;
                }, {});
                setEvents(eventsObj);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };
        getEvents();
    }, []);

    const saveEvent = async (day, hour, title) => {
        const key = `${day}_${hour}`;
        const updatedEvents = { ...events, [key]: { title, id: events[key]?.id } };
        setEvents(updatedEvents);

        if (events[key]?.id) {
            const eventId = events[key].id;
            await updateData('events', eventId, { day, hour, title });
        } else {
            const newEvent = await createData('events', { day, hour, title });
            updatedEvents[key].id = newEvent.id;
            setEvents(updatedEvents);
        }
    };

    const removeEvent = async (day, hour) => {
        const key = `${day}_${hour}`;
        const updatedEvents = { ...events };
        const eventId = events[key].id;
        delete updatedEvents[key];
        setEvents(updatedEvents);
        await deleteData('events', eventId);
    };

    return (
        <div className={styles.container}>
            <Link href="/home">
                <button className={styles.homeButton}>Home</button>
            </Link>
            <header className={styles.header}>
                <h1>Plan Your Week with Ease</h1>
                <p>
                    Welcome to the Weekly Programme planner by PlanWise. This tool is specially designed to help you efficiently organize and manage your academic lectures and calendar.
                    To schedule a new event, simply click on the desired time slot, enter the event details, and press &apos;Enter&apos;. Double-click an existing event to remove it from your schedule, ensuring your weekly plan is always up-to-date.
                </p>
            </header>
            <div className={styles.weeklySchedule}>
                <div className={styles.weeklyScheduleHeader}>
                    <div></div>
                    {daysOfWeek.map(day => (
                        <div key={day} className={styles.dayHeader}>{day}</div>
                    ))}
                </div>
                {hoursOfDay.map(hour => (
                    <React.Fragment key={hour}>
                        <div className={styles.hourHeader}>{hour}:00</div>
                        {daysOfWeek.map(day => (
                            <div key={day} className={styles.timeSlot}>
                                <input
                                    type="text"
                                    value={events[`${day}_${hour}`]?.title || ''}
                                    onChange={(e) => saveEvent(day, hour, e.target.value)}
                                    onDoubleClick={() => removeEvent(day, hour)}
                                    placeholder="Add event"
                                    className={styles.eventInput}
                                />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
