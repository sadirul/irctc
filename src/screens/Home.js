import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import styles from '../styles/Styles';
import DatePicker from 'react-native-date-picker'
import Helper from '../../Helper/Helper'



const Home = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  // const [open, setOpen] = useState(false)
  const Icon = require('../images/logo.png')
  const {requestURL} = Helper();

  const getIRCTCUserid = async () => {
    if(!emailOrPhone){
      ToastAndroid.show("Please enter email or phone!", ToastAndroid.SHORT)
      return false
    }

    if(!date){
      ToastAndroid.show("Please enter DOB!", ToastAndroid.SHORT)
      return false
    }
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email, mobile;
    if (emailOrPhone.match(emailRegex)){
      email = emailOrPhone
      mobile = ''
    }else{
      email = ''
      mobile = emailOrPhone
    }

    let url = `${requestURL}/forgotDetails?requestType=U&email=${email}&mobile=${mobile}&dob=${date.toISOString().split('T')[0].replace(/-/g, '')}&userLoginId=&flavour=web&otpType=%27%27`
    // console.log(url)
    try {
      const response = await fetch(
        url,
      );
      const json = await response.json();
      // return json.movies;
      alert(json.Status)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // getIRCTCUserid();
  }, []);


  return (
    <View style={styles.homeContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={Icon} />
      </View>
      <Text style={{ ...styles.headerTextStyle, marginHorizontal: 8 }}>Hello,</Text>
      <Text style={{ ...styles.subtitleStyle, marginHorizontal: 8 }}>User</Text>

      <Text style={styles.inputTitleStyle}>Enter Email or Phone : </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Enter Email or Phone'
        onChangeText={(text) => setEmailOrPhone(text)}
        value={emailOrPhone}

      />

    <Text style={styles.inputTitleStyle}>DOB : </Text>
      <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
        <View
          style={styles.datePickerView}
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

      <TouchableOpacity
        onPress={() => getIRCTCUserid()}
      >
        <View style={styles.getUseridButton}>
          <Text style={styles.getUseridText}>Get IRCTC User ID</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Home
