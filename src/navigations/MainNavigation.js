import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from './BottomBar';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    const user = useSelector(state => state.user);

    useEffect(() => {
        // if (user.isLoggedIn && user.user_data !== null) {
        //     console.log('User connected from menu', user.user_data);
        // } else {
        //     console.log('User not connected from menu');
        // }
    }, [user]);

    return (
        <NavigationContainer>
            {user.isLoggedIn && user.user_data != null && (
                <Stack.Navigator initialRouteName="Index" screenOptions={{gestureEnabled: false, headerShown: false}}>
                    <Stack.Screen name="Index" component={BottomBar} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            )}

            {!user.isLoggedIn && (
                <Stack.Navigator initialRouteName="Index" screenOptions={{gestureEnabled: false, headerShown: false}}>
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default MainNavigation;
