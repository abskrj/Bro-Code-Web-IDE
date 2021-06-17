import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    lang: "html",
    code: {},
    darkMode: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload
            };

        case actionTypes.UPDATE_CODE:
            const codeLang = action.payload.lang;
            return {
                ...state,
                code: { ...state.code, [codeLang]: action.payload.code }
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