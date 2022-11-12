import {StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';

const height = Platform.OS === 'android' && Platform.Version > 26 ? Dimensions.get('screen').height : Dimensions.get('window').height;

const app = StyleSheet.create({
    primaryColor: {
        color: '#e91e63ff',
    },
    bgPrimaryColor: {
        backgroundColor: '#e91e63ff',
    },
});

export default app;
