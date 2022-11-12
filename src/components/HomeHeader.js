/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, HStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeader = ({navigation}) => {
    //const user = useSelector(state => state.user);

    // useEffect(() => {
    //   if (user.isLoggedIn && user.user_data !== null) {
    //     console.log('User connected from header', user.user_data);
    //   }
    // }, [user]);

    return (
        <HStack style={styles.header}>
            <TouchableOpacity onPress={console.log('get default localication')}>
                <HStack alignItems="center">
                    <Icon name="home" color="tertiary" size={25} />
                    <Text color="tertiary" fontSize="lg" marginLeft={2} fontWeight="bold">
                        SIMA
                    </Text>
                </HStack>
            </TouchableOpacity>

            <HStack style={{alignItems: 'center'}}>
                <Button size="xs" variant={'outline'} onPress={() => navigation.navigate('Login')} colorScheme="tertiary">
                    <Text color="green">Se deconnecter</Text>
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
