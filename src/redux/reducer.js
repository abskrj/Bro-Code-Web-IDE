import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    currentTab: 0,
    code: {
        html: "",
        css: "",
        js: ""
    },
    darkMode: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            return {
                ...state,
                currentTab: action.payload
            };
        
        case actionTypes.UPDATE_HTML:
            return {
                ...state,
                code: {...state.code, html: action.payload}
            }
        
        case actionTypes.UPDATE_CSS:
            return {
                ...state,
                code: {...state.code, css: action.payload}
            }
        
        case actionTypes.UPDATE_JS:
            return {
                ...state,
                code: {...state.code, js: action.payload}
            }
        case actionTypes.TOGGLE_THEME:
            return {
                ...state,
                darkMode: !state.darkMode
            }

        default:
            return state;
    }
}

export default reducer;