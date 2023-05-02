import React, { useState } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import styles from '../styles/Styles';
import DatePicker from 'react-native-date-picker'



const Home = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(true)
  const Icon = require('../images/logo.png');
  return (
    <View style={styles.homeContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={Icon} />
      </View>
      <Text style={{ ...styles.headerTextStyle, marginHorizontal: 8 }}>Hello,</Text>
      <Text style={{ ...styles.subtitleStyle, marginHorizontal: 8 }}>User</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Enter Email or Phone'

      />
      <DatePicker
        mode='date'
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}

export default Home
