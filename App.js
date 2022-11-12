import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <Text>Salut</Text>
      <Icon name="rocket" size={30} color="#900" />
    </NativeBaseProvider>
  );
};
export default App;
