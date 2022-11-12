import {Box, Button, Heading, HStack, Input, ScrollView, Select, Spinner, Text, TextArea, useToast, View} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';

const Form = ({navigation}) => {
    const [marche, setMarche] = useState('');
    const [produit, setProduit] = useState('');
    const [currency, setCureency] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const onSubmitForm = async () => {
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
        <SafeAreaView>
            {/* Header */}
            <HomeHeader navigation={navigation} />
            <ScrollView padding={4}>
                <Text fontSize={25} fontWeight="bold">
                    Collecter de données
                </Text>
                <Box w="100%" mb={3}>
                    <Select
                        fontSize={20}
                        selectedValue={marche}
                        minWidth="200"
                        accessibilityLabel="Choisir le marché"
                        placeholder="Choisir le marché"
                        _selectedItem={{
                            bg: 'tertiary.100',
                        }}
                        mt={1}
                        onValueChange={itemValue => setMarche(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross" />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item label="Backend Development" value="backend" />
                    </Select>
                </Box>

                <Box w="100%" mb={3}>
                    <Select
                        fontSize={20}
                        selectedValue={produit}
                        minWidth="200"
                        accessibilityLabel="Selectionner un produit"
                        placeholder="Selectionner un produit"
                        _selectedItem={{
                            bg: 'tertiary.100',
                        }}
                        mt={1}
                        onValueChange={itemValue => setProduit(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross" />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item label="Backend Development" value="backend" />
                    </Select>
                </Box>

                <HStack alignItems={'center'} mb={3}>
                    <Input keyboardType='numeric' width={'60%'} size="2xl" placeholder="Prix" />
                    <Select
                        fontSize={20}
                        selectedValue={currency}
                        width={'130'}
                        accessibilityLabel="Devise"
                        placeholder="Devise"
                        _selectedItem={{
                            bg: 'tertiary.100',
                        }}
                        onValueChange={itemValue => setCureency(itemValue)}>
                        <Select.Item label="USD" value="USD" />
                        <Select.Item label="Fc" value="CFD" />
                    </Select>
                </HStack>

                <HStack alignItems={'center'} mb={3}>
                    <Input keyboardType='numeric' width={'80%'} size="2xl" placeholder="Poids" />
                    <Text ml={2} fontSize={20}>
                        en Kg
                    </Text>
                </HStack>

                <HStack alignItems={'center'} mb={3}>
                    <Input keyboardType='numeric' width={'80%'} size="2xl" placeholder="Taux du jour" />
                    <Text ml={2} fontSize={20}>
                        Fc = 1$
                    </Text>
                </HStack>

                <Box mb={5}>
                    <TextArea fontSize={20} h={20} placeholder="Ajouter un comentaire... (pas obligatoire)" w="100%" />
                </Box>

                {!loading && (
                    <Button onPress={onSubmitForm} size="lg" w={'100%'} h={'50px'} colorScheme="tertiary">
                        Enregistrer
                    </Button>
                )}

                {loading && (
                    <HStack space={2} justifyContent="center" style={{marginTop: 10}}>
                        <Spinner color="tertiary.700" accessibilityLabel="Enregistrement encours..." />
                        <Heading color="tertiary.700" fontSize="md">
                            Enregistrement encours...
                        </Heading>
                    </HStack>
                )}
                <Box paddingBottom={40}></Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Form;
