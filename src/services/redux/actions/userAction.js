import qs from 'qs';

import {SET_USER} from '../reducers/userReducer';
import {deleteUserSession, setUserSession} from '../../sessionManage/userSession';
import axiosApi from '../../../api/axios';

export const setUser = user => {
    return {
        type: SET_USER,
        value: user,
    };
};

export const login = (identifier, password) => async dispatch => {
    const requestBody = {
        login: identifier,
        password: password,
        key: 'hdnAu72k0Q',
    };

    console.log('Identifier', identifier);

    try {
        const {data: response} = await axiosApi.post('/login', qs.stringify(requestBody));

        console.log('Login response', response, 'Request body', requestBody);

        if (response.code == 200) {
            await setUserSession(response.user);
            let user = {
                user: response.user,
                logged: true,
            };
            dispatch(setUser(user));
        }

        return response;
    } catch (err) {
        console.log('Erreur login', JSON.stringify(err));
        return false;
    }
};

export const logout = () => async dispatch => {
    await deleteUserSession();
    let user = {
        user: null,
        logged: false,
    };
    dispatch(setUser(user));
};
