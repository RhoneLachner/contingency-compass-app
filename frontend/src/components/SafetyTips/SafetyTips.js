// src/components/SafetyTips/SafetyTips.js

import React from 'react';
import './safetyTips.css';

const SafetyTips = () => {
    const tips = [
        { id: 1, tip: 'In case of an earthquake, drop, cover, and hold on.' },
        { id: 2, tip: 'During a flood, move to higher ground immediately.' },
    ];

    return (
        <section className="safety-tips">
            <h2>Safety Tips</h2>
            <ul>
                {tips.map(tip => (
                    <li key={tip.id} className="safety-tip-item">
                        {tip.tip}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SafetyTips;
