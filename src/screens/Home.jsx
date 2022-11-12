import React from 'react';
import {HStack, VStack, Text, Box, Center, ScrollView, Stack, Image, Button} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useWindowDimensions, FlatList} from 'react-native';
import HomeHeader from '../components/HomeHeader';

export default function Home({navigation}) {
    window = useWindowDimensions();

    return (
        <SafeAreaView>
            {/* Header */}
            <HomeHeader navigation={navigation} />

            <ScrollView>
                <Text>Home page</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
