/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import api from '../axios';
import {setUser} from '../redux/actions/userAction';
import {getUserSession} from './userSession';

export const AuthProvider = ({children}) => {
    const dispatch = useDispatch();

    /**
     * Check user setted in cookie
     */
    useEffect(() => {
        async function loadUserSession() {
            const userSession = await getUserSession();
            if (userSession) {
                let user = {
                    user: userSession,
                    logged: true,
                };
                dispatch(setUser(user));
            } else {
                //navigation.navigate('Login');
                console.log('Disconnect user');
            }
            console.log('User AsyncStorage from AuthProvider', userSession);
        }
        loadUserSession();
    }, []);

    return <>{children}</>;
};
