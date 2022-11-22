import {Box, Button, Heading, HStack, Input, ScrollView, Select, Spinner, Text, TextArea, useToast, View} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import realm, {createDate} from '../databases/schemas';
import axiosApi from '../api/axios';
import {setLastDataId} from '../services/redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';

const Form = ({navigation}) => {
    const [marche, setMarche] = useState('');
    const [produit, setProduit] = useState('');
    const [currency, setCureency] = useState('');
    const [prix, setPrix] = useState('');
    const [poids, setPoids] = useState('');
    const [taux, setTaux] = useState('');
    const [commentaire, setCommentaire] = useState('');
    const [loading, setLoading] = useState(false);
    const [marches, setMarches] = useState([]);
    const [produits, setProduits] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const toast = useToast();

    useEffect(() => {
        const loadData = async () => {
            try {
                const {data: response} = await axiosApi.get('/dropdown?key=hdnAu72k0Q');
                setMarches(response.marches);
                setProduits(response.produits);
                console.log(response.marches);
            } catch (err) {
                console.log('Axios error---', err);
            }
        };

        setMarche(user.user_data.market);

        loadData();
    }, []);

    const onSubmitForm = async () => {
        if (marche != '' && produit != '' && currency != '' && prix != '' && poids != '' && taux != '') {
            setLoading(true);

            const data = {
                id: Math.floor(Date.now()),
                date: new Date(),
                marche: marche,
                produit: produit,
                poids: poids,
                prix: prix,
                devise: currency,
                taux: taux,
                commentaire: commentaire,
            };

            createDate(data)
                .then(res => {
                    toast.show({
                        render: () => {
                            return (
                                <Box bg="primary.500" px="4" py="4" rounded="sm" mb={5}>
                                    <Text color={'#fff'}>Données enregistrées avec succès</Text>
                                </Box>
                            );
                        },
                    });
                    setCommentaire('');
                    setPrix('');
                    setMarche('');
                    setProduit('');
                    setCureency('');
                    setPoids('');
                    setTaux('');

                    let lastData = {lastId: data.id};
                    dispatch(setLastDataId(lastData));
                    console.log('Enregitré : ', res);
                    setTimeout(() => navigation.navigate('Home'), 500);
                    setLoading(false);
                })
                .catch(error => {
                    toast.show({
                        render: () => {
                            return (
                                <Box bg="#fc0303" px="4" py="4" rounded="sm" mb={5}>
                                    <Text color={'#fff'}>
                                        Une erreur est survenue lors de l'enregistement des donnéees, Si l'erreur persiste veuillez contacter
                                        l'administrateur
                                    </Text>
                                </Box>
                            );
                        },
                    });
                    console.log('Error', error);
                    setLoading(false);
                });
        } else {
            toast.show({
                render: () => {
                    return (
                        <Box bg="#fc0303" px="4" py="4" rounded="sm" mb={5}>
                            <Text color={'#fff'}>Veuillez remplir tous les champs obligatoires svp!</Text>
                        </Box>
                    );
                },
            });
            setLoading(false);
        }
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
                        {marches.map(marche => (
                            <Select.Item key={marche.id} label={marche.name} value={marche.id} />
                        ))}
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
                        {produits.map(produit => (
                            <Select.Item key={produit.id} label={produit.name} value={produit.id} />
                        ))}
                    </Select>
                </Box>

                <HStack alignItems={'center'} mb={3}>
                    <Input
                        keyboardType="numeric"
                        width={'60%'}
                        size="2xl"
                        placeholder="Prix"
                        defaultValue={prix}
                        onChangeText={itemValue => setPrix(itemValue)}
                    />
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
                        <Select.Item label="FC" value="FC" />
                    </Select>
                </HStack>

                <HStack alignItems={'center'} mb={3}>
                    <Input
                        keyboardType="numeric"
                        width={'80%'}
                        size="2xl"
                        placeholder="Poids"
                        defaultValue={poids}
                        onChangeText={itemValue => setPoids(itemValue)}
                    />
                    <Text ml={2} fontSize={20}>
                        en Kg
                    </Text>
                </HStack>

                <HStack alignItems={'center'} mb={3}>
                    <Input
                        keyboardType="numeric"
                        width={'80%'}
                        size="2xl"
                        placeholder="Taux du jour"
                        defaultValue={taux}
                        onChangeText={itemValue => setTaux(itemValue)}
                    />
                    <Text ml={2} fontSize={20}>
                        Fc = 1$
                    </Text>
                </HStack>

                <Box mb={5}>
                    <TextArea
                        fontSize={20}
                        h={20}
                        placeholder="Ajouter un comentaire... (pas obligatoire)"
                        w="100%"
                        defaultValue={commentaire}
                        onChangeText={itemValue => setCommentaire(itemValue)}
                    />
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
