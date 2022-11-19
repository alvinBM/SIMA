// API/authentification.js
import axios from 'axios';
import qs from 'qs';

//Configuration pour le header global
const configPostForm = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
    },
    mode: 'no-cors',
};

const API_URL = 'https://api-enqueteur-pasank.adh-monitoring.com';
const API_KEY = 'eyJ1c2VyX2lkIjoxyIsNDAzMjUzfQ/go-passe-KEY';

/**
 * Fonction qui permet de conncter un utilisateur
 * @param {*} username
 * @param {*} password
 */
export function loginUser(login, password) {
    const requestBody = {
        login: login,
        password: password,
        key: API_KEY,
    };

    const url = API_URL + '/api/user/login';

    console.log('---------LOGIN PROCESS----------');

    return axios
        .post(url, qs.stringify(requestBody), configPostForm)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log('erreur');
            console.log(err);
            return err;
        });
}
