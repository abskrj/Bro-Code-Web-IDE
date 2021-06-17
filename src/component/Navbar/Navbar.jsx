import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useDispatch, useSelector } from 'react-redux';

import { changeLang, toggleTheme } from '../../redux/action';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core';
import mergeAllCode from '../../utils/htmlParser';
import downloadCode from '../../utils/downlaodCode';
import languages from '../../constants/languages';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FF75A0',
        padding: 6
    },
    navDark: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#161D6F',
        padding: 6
    },
    btn: {
        color: 'white'
    },
    formControl: {
        margin: 1,
        minWidth: 120,
    },
    select: {
        color: '#fff'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    const lang = useSelector(state => state.lang);
    const code = useSelector(state => state.code);
    const darkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();

    const save = () => {
        downloadCode(mergeAllCode(code.html, code.css, code.js));
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={darkMode ? classes.navDark : classes.nav}>

                <FormControl className={classes.formControl}>
                    <Select
                        className={classes.select}
                        value={lang}
                        onChange={(e) => dispatch(changeLang(e.target.value))}
                    >
                        <MenuItem value="" disabled>Language</MenuItem>
                        {
                            languages.map(lang => <MenuItem key={lang.code} value={lang.code}>{lang.lang}</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <Button className={classes.btn} onClick={save}>Save</Button>
                <Button className={classes.btn} onClick={() => dispatch(toggleTheme())}>{darkMode ? 'Light' : 'Dark'}</Button>
            </AppBar>
        </div>
    );
}
