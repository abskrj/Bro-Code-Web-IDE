import actionTypes from "./actionTypes";

export const changeLang = (lang) => ({
    type: actionTypes.CHANGE_LANG,
    payload: lang
});

export const updateCode = (lang, code) => ({
    type: actionTypes.UPDATE_CODE,
    payload: { lang, code }
});

export const onUpdateCode = (lang, code) => ({
    type: actionTypes.ON_UPDATE_CODE,
    payload: { lang, code }
});

export const toggleTheme = () => ({
    type: actionTypes.TOGGLE_THEME,
});