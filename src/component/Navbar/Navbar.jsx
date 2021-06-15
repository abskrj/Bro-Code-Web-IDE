import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from 'react-redux';

import { changeTab, toggleTheme } from '../../redux/action';
import { Button } from '@material-ui/core';
import mergeAllCode from '../../utils/htmlParser';
import showOutput from '../../utils/showOutput';
import downloadCode from '../../utils/downlaodCode';

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FF75A0'
    },
    navDark: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#161D6F'
    },
    btn: {
        color: 'white'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    const currentTab = useSelector(state => state.currentTab);
    const code = useSelector(state => state.code);
    const darkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();

    const execute = () => {
        showOutput(mergeAllCode(code.html, code.css, code.js));
    }

    const save = () => {
        downloadCode(mergeAllCode(code.html, code.css, code.js));
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={darkMode ? classes.navDark : classes.nav}>
                <Tabs value={currentTab} onChange={(e, val) => dispatch(changeTab(val))} aria-label="Language Tab">
                    <Tab label="HTML" {...a11yProps(0)} />
                    <Tab label="CSS" {...a11yProps(1)} />
                    <Tab label="JS" {...a11yProps(2)} />
                </Tabs>
                <Button className={classes.btn} onClick={execute}>Run</Button>
                <Button className={classes.btn} onClick={save}>Save</Button>
                <Button className={classes.btn} onClick={() => dispatch(toggleTheme())}>{darkMode ? 'Light' : 'Dark'}</Button>
            </AppBar>
        </div>
    );
}
