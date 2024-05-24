import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <Link href="/home">Home</Link>
            <Link href="/todo">Todo</Link>
            <Link href="/program">Program</Link>
            <Link href="/links">Links</Link>
        </nav>
    );
};

export default Navigation;
