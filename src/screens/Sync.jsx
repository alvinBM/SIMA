import {Box, Button, Heading, HStack, Progress, ScrollView, Spinner, Text, useToast, View, VStack} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import axiosApi from '../api/axios';
import HomeHeader from '../components/HomeHeader';
import realm, {deleteData, getDatas} from '../databases/schemas';
import qs from 'qs';
import { setLastDataId } from '../services/redux/actions/userAction';

const Sync = ({navigation}) => {
    const data = useSelector(state => state.user);
    const user = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    const [total, setTotal] = useState([]);
    const [pourecentage, setPourcentage] = useState(0);
    const toast = useToast();
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            getDatas()
                .then(datas => {
                    console.log('Data getted======');
                    setDatas(datas);
                    setTotal(datas.length);
                    console.log('Data in db', datas);
                })
                .catch(error => {
                    console.log('erreor when get Producteurs', error);
                });
        };

        console.log(data.lastId);

        loadData();
    }, [data.lastId]);

    const onSubmitSync = () => {
        setLoading(true);

        console.log('Sauvegarde en cours producer...');
        var i = 0;
        datas.map(data => {
            i++;
            console.log('data n =>', data.id);
            const requestBody = {
                id: user.user_data.id,
                key: 'hdnAu72k0Q',
                date: data.date,
                marche: data.marche,
                produit: data.produit,
                poids: data.poids,
                prix: data.prix,
                devise: data.devise,
                taux: data.taux,
                commentaire: data.commentaire,
            };

            saveData(requestBody, data.id, i);

            if (i == total) {
                setLoading(false);
                setTotal(0);
                dispatch(setLastDataId(0));
            }
        });
    };

    const saveData = async (requestBody, dataID, i) => {
        try {
            const {data: response} = await axiosApi.post('/sync', qs.stringify(requestBody));

            console.log('===========Sync response', response, 'Request body', requestBody);
            console.log('======================================================');

            if (response.code == 200) {
                //Delete from DB
                deleteData(dataID).then(resp => {
                    console.log('producteur n ' + dataID + ' => deleted =>', resp);
                });
                setPourcentage((i / total) * 100);
            } else {
                toast.show({
                    render: () => {
                        return (
                            <Box bg="#fc0303" px="4" py="4" rounded="sm" mb={5}>
                                <Text color={'#fff'}>Impossible de synchroniser les données</Text>
                            </Box>
                        );
                    },
                });
            }
        } catch (err) {
            console.log('Erreur sync', JSON.stringify(err));
            toast.show({
                render: () => {
                    return (
                        <Box bg="#fc0303" px="4" py="4" rounded="sm" mb={5}>
                            <Text color={'#fff'}>Server error : Request failed due to internal server error...</Text>
                        </Box>
                    );
                },
            });
        }
    };

    return (
        <SafeAreaView>
            {/* Header */}
            <HomeHeader navigation={navigation} />

            <VStack pt="40" p={4} justifyContent="center" alignItems={'center'}>
                <Text fontSize={25} fontWeight="bold">
                    Synchronisation
                </Text>
                <Text fontSize={150} fontWeight="bold">
                    {total}
                </Text>
                <Text marginBottom={10} fontSize={20}>
                    Données à synchroniser
                </Text>
                {!loading && total > 0 && (
                    <Button onPress={onSubmitSync} size="lg" w={'95%'} h={'50px'} colorScheme="tertiary">
                        Synchroniser les données
                    </Button>
                )}

                {loading && (
                    <HStack space={2} justifyContent="center" style={{marginTop: 10}}>
                        <Heading color="tertiary.700" fontSize="md">
                            {Math.ceil(pourecentage)}
                            {'%'} Synchronisation encours...
                        </Heading>
                    </HStack>
                )}
            </VStack>
        </SafeAreaView>
    );
};

export default Sync;
