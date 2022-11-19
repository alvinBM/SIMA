/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import Realm from "realm";

export const MARKET_SCHEMA = "Market";


export const marketSchema = {
    name: MARKET_SCHEMA,
    primaryKey: "id",
    properties: {
        id: "int",
        date: "date",
        marche : 'string',
        produit : 'string',
        poids : 'string',
        prix : 'string',
        devise : 'string',
        taux : 'string',
        commentaire : 'string',
    },
};


const databaseOptions = {
    path: "pasa.realm",
    schema: [marketSchema],
    schemaVersion: 1,
};


/*** Fonctions for model */
export const createDate = newData => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(MARKET_SCHEMA, newData);
            resolve(newData);
        });
    }).catch(error => {
        console.log("Erreur create producteur realm", error);
        reject(error);
    });

});



export const deleteProducteur = producteurId => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletingProducteur = realm.objectForPrimaryKey(MARKET_SCHEMA, producteurId);
            realm.delete(deletingProducteur);
            resolve();
        });
    }).catch(error => {
        console.log("Erreur Deleting visa producteur", error);
        reject(error);
    });

});




export const getProducteurs = () => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let producteurs = realm.objects(MARKET_SCHEMA);
            resolve(producteurs);
        });
    }).catch(error => {
        console.log("Erreur Get all producteurs realm", error);
        reject(error);
    });

});


export default new Realm(databaseOptions);
