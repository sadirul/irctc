import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/Styles';
import DatePicker from 'react-native-date-picker'



const Home = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
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
      <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
        <View
          style={styles.datePickerView}
          placeholder='Enter Email or Phone'

        >
          <Text>{date.toISOString().split('T')[0]}</Text>
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
      </TouchableOpacity>

    </View>
  )
}

export default Home
