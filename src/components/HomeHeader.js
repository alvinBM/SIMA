/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, HStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../services/redux/actions/userAction';
const logo = require('../assets/logo.png');

const HomeHeader = ({navigation}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user);

    const deconnexion = async () => {
        await dispatch(logout());
        navigation.navigate('Login');
    };

    useEffect(() => {
        console.log('Data sync===', data.lastId);
    }, [data]);

    return (
        <HStack style={styles.header}>
            <HStack alignItems="center">
                <ImageBackground resizeMode="cover" style={{width: 40, height: 40}} source={logo} />
                <Text color={'tertiary.600'} fontSize="lg" marginLeft={2} fontWeight="bold">
                    SIMA / PASA-NK
                </Text>
            </HStack>

            <HStack style={{alignItems: 'center'}}>
                <Button size="xs" variant={'outline'} onPress={deconnexion} colorScheme="tertiary">
                    <Text>Se deconnecter</Text>
                </Button>
            </HStack>
        </HStack>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    loginBtn: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default HomeHeader;
