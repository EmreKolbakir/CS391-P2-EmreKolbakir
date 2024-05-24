import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchData('events');
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    getEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
