import React from 'react';
import { Helmet } from 'react-helmet';

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
