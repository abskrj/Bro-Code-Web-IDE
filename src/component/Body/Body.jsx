import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabPanel from '../TabPanel/TabPanel';
import AceEditor from "react-ace";

import { onUpdateCSS, onUpdateHTML, onUpdateJS } from '../../redux/action';
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

    const currentTab = useSelector(state => state.currentTab);
    const code = useSelector(state => state.code);
    const darkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();

    return (
        <div className={darkMode ? classes.rootDark : classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TabPanel value={currentTab} index={0}>
                        <AceEditor
                            mode="html"
                            theme={darkMode ? 'cobalt' : 'github'}
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            showLineNumbers={true}
                            fontSize={18}
                            value={code.html}
                            onChange={(_n) => dispatch(onUpdateHTML(_n))}
                            setOptions={config}
                            className={classes.editor}
                            focus={true}
                        />
                    </TabPanel>
                    <TabPanel value={currentTab} index={1}>
                        <AceEditor
                            mode="css"
                            theme={darkMode ? 'cobalt' : 'github'}
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            showLineNumbers={true}
                            fontSize={18}
                            value={code.css}
                            onChange={(_n) => dispatch(onUpdateCSS(_n))}
                            setOptions={config}
                            className={classes.editor}
                            focus={true}
                        />
                    </TabPanel>
                    <TabPanel value={currentTab} index={2}>
                        <AceEditor
                            mode="javascript"
                            theme={darkMode ? 'cobalt' : 'github'}
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            showLineNumbers={true}
                            fontSize={18}
                            value={code.js}
                            onChange={(_n) => dispatch(onUpdateJS(_n))}
                            setOptions={config}
                            className={classes.editor}
                            focus={true}
                        />
                    </TabPanel>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Output />
                </Grid>
            </Grid>
        </div>
    )
}
