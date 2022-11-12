import {Box, Button, Heading, HStack, Input, ScrollView, Spinner, Stack, Text, useToast, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import app from '../styles/app';

var {height} = Dimensions.get('screen');

const Login = ({navigation}) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [fieldFocused, setFieldFocused] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const onSubmitLogin = async () =>{
        setLoading(true);
        toast.show({
            render: () => {
                return (
                    <Box bg="#fc0303" px="4" py="4" rounded="sm" mb={5}>
                        <Text color={'#fff'}>A integrer</Text>
                    </Box>
                );
            },
        });
    };

    return (
        <VStack justifyContent={'space-between'}>
            <VStack justifyContent="center" alignItems="center" h="250" backgroundColor="tertiary.500">
                <Icon name="home" size={60} color="#fff" />
                <TouchableOpacity onPress={() => navigation.navigate('Index')}>
                    <Text mt="2" fontSize="40" fontWeight="bold" color="white">
                        SIMA
                    </Text>
                </TouchableOpacity>
            </VStack>
            <VStack paddingY={7} paddingX={5} backgroundColor={'white'} h="full" borderTopLeftRadius={20} borderTopRightRadius={20} marginTop={-5}>
                {/**Body Login */}
                <ScrollView style={{...styles.loginBody}}>
                    <Text textAlign={'center'} fontSize={20} fontWeight={'bold'}>
                        Connectez-vous
                    </Text>
                    <Stack mt={7} space={4} w="100%" alignItems="center">
                        <Input
                            InputLeftElement={
                                <Icon
                                    style={{margin: 10}}
                                    name={`${fieldFocused === 'login' ? 'person' : 'person-outline'}`}
                                    color={`${fieldFocused === 'login' ? 'green' : '#999'}`}
                                    size={20}
                                />
                            }
                            type={'text'}
                            keyboardType="phone-pad"
                            placeholder="Numéro de téléphone"
                            width={'95%'}
                            size="xl"
                            h={'50px'}
                            p={4}
                            onChangeText={valueIdentifier => setIdentifier(valueIdentifier)}
                            onFocus={() => setFieldFocused('login')}
                            onBlur={() => setFieldFocused(null)}
                        />
                        <Input
                            InputLeftElement={
                                <Icon
                                    style={{margin: 10}}
                                    name={`${fieldFocused === 'password' ? 'lock-closed' : 'lock-closed-outline'}`}
                                    color={`${fieldFocused === 'password' ? 'green' : '#999'}`}
                                    size={20}
                                />
                            }
                            width={'95%'}
                            type={showPassword ? 'text' : 'password'}
                            InputRightElement={
                                <Icon
                                    style={{margin: 10}}
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color="#999"
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            }
                            placeholder="Mot de passe"
                            h={'50px'}
                            size="xl"
                            p={4}
                            onChangeText={valuePassword => setPassword(valuePassword)}
                            onFocus={() => setFieldFocused('password')}
                            onBlur={() => setFieldFocused(null)}
                        />

                        {!loading && (
                            <Button onPress={onSubmitLogin} size="lg" w={'95%'} h={'50px'} colorScheme="tertiary">
                                Se conneceter
                            </Button>
                        )}

                        {loading && (
                            <HStack space={2} justifyContent="center" style={{marginTop: 10}}>
                                <Spinner color="tertiary.700" accessibilityLabel="Connexion encours..." />
                                <Heading color="tertiary.700" fontSize="md">
                                    Connexion encours...
                                </Heading>
                            </HStack>
                        )}
                    </Stack>

                    <View mt={100} textAlign="center" fontWeight="light">
                        {/* <Text textAlign="center">Vous n'avez pas un compte ?</Text> */}
                        <Text textAlign="center" fontWeight={'bold'} color="tertiary.600">
                            SIMA - PASA NK
                        </Text>
                    </View>
                </ScrollView>
            </VStack>
        </VStack>
    );
};

const styles = StyleSheet.create({
    login: {
        width: '100%',
        height: '100%',
    },
    headerLogin: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        marginTop: 0,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },
    backButton: {
        width: 40,
        height: 40,
        // backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    loginText: {
        color: '#e91e63ff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    loginBody: {
        paddingTop: 20
    },
});

export default Login;
