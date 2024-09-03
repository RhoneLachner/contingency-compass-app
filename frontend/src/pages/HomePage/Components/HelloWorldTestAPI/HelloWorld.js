/* src/components/HelloWorld/HelloWorld.js */

import React, {  useEffect, useState } from 'react';

import { fetchHelloWorld } from '../../services/apiService';
import './helloWorld.css'; 

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getMessage = async () => {
            try {
                const data = await fetchHelloWorld();
                setMessage(data.message);
            } catch (error) {
                setMessage('Error fetching message');
            }
        };

        getMessage();
    }, []);

    return (
        <div className="helloWorldContainer">
            <h1 className="helloWorldText">{message || 'Loading...'}</h1>
        </div>
    );
};

export default HelloWorld;
