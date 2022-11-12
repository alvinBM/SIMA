import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from './BottomBar';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomBar" screenOptions={{gestureEnabled: false, headerShown: false}}>
                <Stack.Screen name="Index" component={BottomBar} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
