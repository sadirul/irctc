import NetInfo from '@react-native-community/netinfo'
import DatePicker from 'react-native-date-picker'
import { useState, useEffect } from 'react'
import Helper from '../../Helper/Helper'
import styles from '../styles/Styles'
import { 
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  StatusBar,
  Keyboard 
} from 'react-native'

const Home = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [isInternet, setIsInternet] = useState(false);
  const Icon = require('../images/icon.png')
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

    if(!isInternet){
      ToastAndroid.show("Please connect Internet!", ToastAndroid.SHORT)
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
    setLoading(true)
    Keyboard.dismiss()
    try {
      const response = await fetch(
        url,
      );
      const json = await response.json();
      Alert.alert(json.Error ? 'Error!' : 'Success', json.Error ? json.Error : json.Status)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  
  useEffect(()=>{
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternet(state.isConnected);
    });
    return () =>{
      unsubscribe();
    }
  }, []);


  return (
    <>
    <StatusBar backgroundColor='#141823'/>
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
          <Text style={styles.dateInput}>{date.toISOString().split('T')[0]}</Text>
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
        {
          !loading ? (
            <View style={styles.getUseridButton}>
              <Text style={styles.getUseridText}>GET USER ID</Text>
            </View>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )
        }
      </TouchableOpacity>

    </View>
    
  </>
  )
}

export default Home
