import React from 'react';
import './Output.scss';

export default function Output() {
    return (
        <div className='output'>
            <iframe
                className="output__display"
                id="output__iframe"
                title="Output"
                frameBorder="0"
            ></iframe>
        </div>
    )
}
