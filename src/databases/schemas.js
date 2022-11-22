/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import Realm from 'realm';

export const MARKET_SCHEMA = 'Market';

export const marketSchema = {
    name: MARKET_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        date: 'date',
        marche: 'string',
        produit: 'string',
        poids: 'string',
        prix: 'string',
        devise: 'string',
        taux: 'string',
        commentaire: 'string',
    },
};

const databaseOptions = {
    path: 'pasa.realm',
    schema: [marketSchema],
    schemaVersion: 1,
};

/*** Fonctions for model */
export const createDate = newData =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then(realm => {
                realm.write(() => {
                    realm.create(MARKET_SCHEMA, newData);
                    resolve(newData);
                });
            })
            .catch(error => {
                console.log('Erreur create producteur realm', error);
                reject(error);
            });
    });

export const deleteData = dataId =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then(realm => {
                realm.write(() => {
                    let deletingData = realm.objectForPrimaryKey(MARKET_SCHEMA, dataId);
                    realm.delete(deletingData);
                    resolve(deletingData);
                });
            })
            .catch(error => {
                console.log('Erreur Deleting visa producteur', error);
                reject(error);
            });
    });

export const getDatas = () =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then(realm => {
                realm.write(() => {
                    let datas = realm.objects(MARKET_SCHEMA);
                    resolve(datas);
                });
            })
            .catch(error => {
                console.log('Erreur Get all datas realm', error);
                reject(error);
            });
    });

export default new Realm(databaseOptions);
