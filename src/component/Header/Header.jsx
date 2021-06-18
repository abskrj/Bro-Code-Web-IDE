import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

export default function Header() {
    const darkMode = useSelector(state => state.darkMode);
    return (
        <>
            <Helmet>
                <meta name="theme-color" content={darkMode ? "#3C415C" : "#FF75A0"} />
            </Helmet>
        </>
    )
}
