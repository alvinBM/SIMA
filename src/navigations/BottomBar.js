/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {View, StyleSheet, Platform} from 'react-native';
import Home from '../screens/Home';
import {Text} from 'native-base';
import Form from '../screens/Form';
import Sync from '../screens/Sync';

const Tabs = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: '#444',
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        position: 'absolute',
                        bottom: 0,
                        elevation: 0,
                        left: 0,
                        right: 0,
                        height: Platform.OS === 'ios' ? 90 : 60,
                        ...styles.bottomBarShadow,
                    },
                    null,
                ],
            }}>
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <View style={styles.tabItem}>
                            <Icon name="home-outline" color={color} size={20} />
                            <Text style={{color: color, ...styles.tabItemLabel}}>Accueil</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Add"
                component={Form}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <View style={styles.tabItem}>
                            <Icon name="add-circle" color={color} size={25} />
                            <Text style={{color: color, ...styles.tabItemLabel}}>Ajouter</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Sync"
                component={Sync}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <View style={styles.tabItem}>
                            <Icon name="sync" color={color} size={20} />
                            <Text style={{color: color, ...styles.tabItemLabel}}>Synchroniser</Text>
                        </View>
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

const styles = StyleSheet.create({
    bottomBarShadow: {
        shadowColor: '#3d3d3d',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.31,
        shadowRadius: 3.5,
        elevation: 3,
    },
    tabItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemLabel: {
        fontSize: 11,
    },
});

export default BottomBar;
