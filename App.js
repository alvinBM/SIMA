import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
    return (
        <NativeBaseProvider>
            <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
            <MainNavigation />
        </NativeBaseProvider>
    );
};
export default App;
