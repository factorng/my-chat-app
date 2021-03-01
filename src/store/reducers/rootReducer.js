
function rootReducer(state, action) {
    switch(action.type) {
        case 'USER_SIGN_IN': return { ...state,  user: {...action.payload, authenticated: true}};
        case 'USER_SIGN_OUT': return {...state, user: {...state.user, authenticated: false}};
        case 'IS_LOADING': return {...state, app: {...state.app, isLoading: action.payload}};
        case 'SHOW_ERROR': return {...state, app: {...state.app, error: action.payload}}
        case 'HIDE_ERROR': return {...state, app: {...state.app, error: false}}
        default: return state;
    }
}
export default rootReducer;