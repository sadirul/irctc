import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/Styles';


const Home = () => {
  const Icon = require('../images/logo.png');
  return (
    <View style={styles.homeContainer}>
        <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={Icon}/>
        </View>
        <Text>Hello</Text>
    </View>
  )
}

export default Home
