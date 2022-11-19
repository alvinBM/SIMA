import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView, StatusBar} from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/services/redux/store';
import {AuthProvider} from './src/services/sessionManage/AuthProvider';

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
            <AuthProvider>
                <NativeBaseProvider>
                    <MainNavigation />
                </NativeBaseProvider>
            </AuthProvider>
        </Provider>
    );
};
export default App;
