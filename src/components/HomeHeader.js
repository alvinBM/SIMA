/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, HStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logout} from '../services/redux/actions/userAction';

const HomeHeader = ({navigation}) => {
    const dispatch = useDispatch();

    const deconnexion = async () => {
        await dispatch(logout());
        navigation.navigate('Login');
    };

    return (
        <HStack style={styles.header}>
            <HStack alignItems="center">
                <Icon color={'green'} name="home" size={25} />
                <Text color={'tertiary.600'} fontSize="lg" marginLeft={2} fontWeight="bold">
                    SIMA
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
