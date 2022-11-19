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

function _formatedTimestamp(d) {
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`;
}

export function saveProducer(
    created,
    created_by,
    id_card_num,
    id_card_type,
    op,
    sector,
    name,
    sex,
    phone,
    local_op,
    local_op_year,
    member_id,
    birth_year,
    civil_status,
    beneficiaire_status,
    household_size,
    boy_under_18,
    girl_under_18,
    boy_between_18_35,
    girl_between_18_35,
    boy_over_35,
    girl_over_35,
    territory,
    groupment,
    collectivity,
    additional_address,
    longitude,
    latitude,
    altitude,
    member_card,
    bassin,
    village,
) {
    const requestBody = {
        created_by,
        id_card_num,
        id_card_type,
        op,
        sector,
        name,
        sex,
        phone,
        local_op,
        local_op_year,
        member_id,
        birth_year,
        civil_status,
        beneficiaire_status,
        household_size,
        boy_under_18,
        girl_under_18,
        boy_between_18_35,
        girl_between_18_35,
        boy_over_35,
        girl_over_35,
        territory,
        groupment,
        collectivity,
        additional_address,
        longitude,
        latitude,
        altitude,
        member_card,
        bassin,
        village,
        key: API_KEY,
        created: _formatedTimestamp(created),
    };

    const url = API_URL + '/api/producteur/save';

    console.log('---------SAVE VISITE PROCESS----------');

    return axios
        .post(url, qs.stringify(requestBody), configPostForm)
        .then(response => {
            console.log('Response ', response);
            return response.data;
        })
        .catch(err => {
            console.log('erreur');
            console.log(err);
            return err;
        });
}

export function getDropdownData() {
    return axios
        .get('https://sima.adh-monitoring.com/api/dropdown?key=hdnAu72k0Q')
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log('erreur');
            console.log(err);
            return err;
        });
}
