import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setUserSession(user) {
    try {
        await AsyncStorage.setItem('user_session', JSON.stringify(user));
        console.log('Session setted succesfuly');
    } catch (error) {
        console.log('Une erreur est survenue');
    }
}

export async function deleteUserSession() {
    try {
        await AsyncStorage.setItem('user_session', '');
        console.log('User disconnected successfully');
    } catch (error) {
        console.log('Une erreur est survenue');
    }
}

export async function checkUserSession() {
    try {
        let user_session = await AsyncStorage.getItem('user_session'); // Get user info in Async Storage

        if (user_session && user_session !== '') {
            let user_session_info = JSON.parse(user_session);

            // Set the general state with redux
            console.log('@@@@@@@@@ SESSSION VALUES @@@@@@@@@@@');
            console.log(user_session_info);

            return true;
        } else {
            console.log('@@@@@@@@@ SESSSION VALUES @@@@@@@@@@@');
            console.log('Vous etes deconnecte');
            return false;
        }
    } catch (error) {
        console.log('Une erreur est survenue');
        return false;
    }
}

export async function getUserSession() {
    try {
        let user_session = await AsyncStorage.getItem('user_session'); // Get user info in Async Storage

        if (user_session && user_session !== '') {
            let user_session_info = JSON.parse(user_session);

            return user_session_info;
        } else {
            return false;
        }
    } catch (error) {
        console.log('Une erreur est survenue');
        return false;
    }
}
