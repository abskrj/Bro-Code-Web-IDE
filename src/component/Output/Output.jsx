import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import mergeAllCode from '../../utils/htmlParser';
import showOutput from '../../utils/showOutput';
import './Output.scss';

export default function Output() {
    const code = useSelector(state => state.code);

    useEffect(() => {
        showOutput(mergeAllCode(code?.html, code?.css, code?.javascript));
    }, [code]);

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
