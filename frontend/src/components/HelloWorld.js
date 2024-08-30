import React, { useEffect, useState } from 'react';
import { fetchHelloWorld } from '../services/apiService';
import './helloWorld.css'; 

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchHelloWorld()
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="helloWorldContainer">
            <h1 className="helloWorldText">{message}</h1>
        </div>
    );
};

export default HelloWorld;
