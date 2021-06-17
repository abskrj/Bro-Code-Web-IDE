import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AceEditor from "react-ace";

import { onUpdateCode } from '../../redux/action';
import config from '../../constants/editorConfig';
import { Grid, makeStyles } from '@material-ui/core';
import Output from '../Output/Output';

const useStyles = makeStyles({
    root: {
        padding: '10px',
        backgroundColor: '#E7E9EB',
        height: '100%'
    },
    rootDark: {
        padding: '10px',
        backgroundColor: '#3C415C',
        height: '100%'
    },
    editor: {
        width: '100% !important',
        height: '90.8vh !important'
    }
});

export default function Body() {
    const classes = useStyles();

    const lang = useSelector(state => state.lang);
    const code = useSelector(state => state.code);
    const darkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();

    const getMode = () => {
        if (lang === 'Python3') return lang.slice(0, -1).toLowerCase();
        return lang.toLowerCase();
    };

    const handleChange = (code) => {
        dispatch(onUpdateCode(lang, code));
    }

    return (
        <div className={darkMode ? classes.rootDark : classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <AceEditor
                        mode={getMode()}
                        theme={darkMode ? 'cobalt' : 'github'}
                        enableBasicAutocompletion={true}
                        enableLiveAutocompletion={true}
                        enableSnippets={true}
                        showLineNumbers={true}
                        fontSize={18}
                        value={code[lang] ?? ""}
                        onChange={handleChange}
                        setOptions={config}
                        className={classes.editor}
                        focus={true}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Output />
                </Grid>
            </Grid>
        </div>
    )
}
