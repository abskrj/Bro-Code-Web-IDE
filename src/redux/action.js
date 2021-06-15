import actionTypes from "./actionTypes";

export const changeTab = (tabIndex) => ({
    type: actionTypes.CHANGE_TAB,
    payload: tabIndex
});

export const updateHTML = (code) => ({
    type: actionTypes.UPDATE_HTML,
    payload: code
});

export const updateCSS = (code) => ({
    type: actionTypes.UPDATE_CSS,
    payload: code
});

export const updateJS = (code) => ({
    type: actionTypes.UPDATE_JS,
    payload: code
});

export const onUpdateHTML = (code) => ({
    type: actionTypes.ON_UPDATE_HTML,
    payload: code
});

export const onUpdateCSS = (code) => ({
    type: actionTypes.ON_UPDATE_CSS,
    payload: code
});

export const onUpdateJS = (code) => ({
    type: actionTypes.ON_UPDATE_JS,
    payload: code
});

export const toggleTheme = () => ({
    type: actionTypes.TOGGLE_THEME,
});