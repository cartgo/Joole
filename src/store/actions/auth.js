import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {console.log("error"+error)
var e = error;
if (error == 'Unauthorized'){e = '"account and password do not match"'}
else if( error == 'Bad Request'){e = 'please enter password and username/email'}

    return {
        type: actionTypes.AUTH_FAIL,
        error: e
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        // type:actionTypes.FILTER_ONLOGOUT,
        type: actionTypes.AUTH_LOGOUT
        // type:actionTypes.USER_LOGOUT
    };
};
 



export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, username,password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        let authData = {
            email: email,
            username:username,
            password: password
            // ,returnSecureToken: true
        };
        let url = 'http://localhost:8080/api/auth/signup'
        if (!isSignup) {
            authData = {
                usernameOrEmail: email,
                username:username,
                password: password
                // ,returnSecureToken: true
            };
            url = 'http://localhost:8080/api/auth/signin'
            // 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.id);
                dispatch(authSuccess(response.data.accessToken, response.data.id));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};