import { getUserInfo } from '../../utils/auth';
import { signOut } from '../../utils/auth';

export function userSignIn(user) {
    return {
        type: 'USER_SIGN_IN',
        payload: user
    }
}

export function userSignOut() {
    signOut();
    return {
        type: 'USER_SIGN_OUT'
    }
}

export function getSetUserData() {
    return async dispatch => {
        try {
            const user = await getUserInfo();
            if(user)  {
                dispatch(userSignIn(user));
            } 
        } catch(error) {
            dispatch(showError(error));
        }
    }    
}

export function setIsLoading(status) {
    return {
        type: 'IS_LOADING',
        payload: status,
    }
}

export function showError(error) {
    return {
        type: 'SHOW_ERROR',
        payload: error.message,
    }
}

export function hideError() {
    return {
        type: 'HIDE_ERROR',
    }
}