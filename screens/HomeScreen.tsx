import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as SecureStore from 'expo-secure-store'
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';
import { useEffect, useState } from 'react';
import * as user from '../firebase/user'
import Navigation from '../navigation';
import User from '../constants/User';
export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {

    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.title}>Your device id is {User.User.name}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="/screens/HomeScreen.tsx" />
          <Button onPress={() => navigation.navigate('NotFound')}title="Play" color='green'></Button>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
