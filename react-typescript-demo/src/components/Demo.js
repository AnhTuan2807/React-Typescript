import React from 'react';

import {useState} from 'react';
export default function DemoApp() {
    const [number, setNumber] = useState(0.9999)
        return (
        <>
            <p>Random number: {number}</p>
            <button onClick={() => setNumber(
            Math.random().toFixed(4))}>Random</button>
        </>
    )
}