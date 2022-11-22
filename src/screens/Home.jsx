import React from 'react';
import {HStack, VStack, Text, Box, Center, ScrollView, Stack, Image, Button, View} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useWindowDimensions, FlatList, ImageBackground, Dimensions} from 'react-native';
import HomeHeader from '../components/HomeHeader';

const splash = require('../assets/splash.jpg');
var {width, height} = Dimensions.get('screen');

export default function Home({navigation}) {
    window = useWindowDimensions();

    return (
        <SafeAreaView>
            {/* Header */}
            <HomeHeader navigation={navigation} />

            <View style={{width: width, height: height}}>
                <ImageBackground resizeMode="cover" style={{width: width, height: height - 80}} source={splash} />
            </View>
        </SafeAreaView>
    );
}
