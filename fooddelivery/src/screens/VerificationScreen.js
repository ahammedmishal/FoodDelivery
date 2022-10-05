import React,{useRef,useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Separator } from '../components';
import { Colors, Fonts , Images , CountryCode } from '../constants';
import { Display } from '../utils';
const VerificationScreen = () => {
    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()
    const [otp, setOtp] = useState({1: '',2: '',3: '',4: ''})
    
  return (
    <View style={styles.container}>
      <StatusBar
       barStyle="dark-content" 
       backgroundColor={Colors.DEFAULT_WHITE}
       translucent
       />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} color={Colors.DEFAULT_BLACK} />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}></Text>
      <Text style={styles.content}>Enter the OTP number just sent you at +91984087602</Text>

      <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={(text)=> {
                    setOtp({...otp, 1: text})
                    text && secondInput.current.focus()
                }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={(text)=> {
                    setOtp({...otp, 2: text})
                    text ? thirdInput.current.focus() 
                    :
                    firstInput.current.focus()
                }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={(text)=> {
                    setOtp({...otp, 3: text})
                    text ? fourthInput.current.focus()
                    :
                    secondInput.current.focus()
                }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={(text)=> {
                    setOtp({...otp, 4: text})
                    !text && thirdInput.current.focus()
                }}
            />
          </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={() =>console.log(otp)}>
          <Text style={styles.signInButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.DEFAULT_WHITE,
      },
      headerContainer: {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      headerTitle:{
        fontSize:20,
        color:Colors.DEFAULT_BLACK,
        fontFamily:Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign:'center',
      },
      title:{
        fontSize:25,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_BLACK,
        lineHeight: 20 * 1.4,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,
      },
      content:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_BLACK,
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,
      },
      otpContainer:{
        marginHorizontal: 20,
        marginBottom:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
      },
      otpBox:{
        borderRadius:5,
        borderColor:Colors.DEFAULT_GREEN,
        borderWidth:0.8,
      },
      otpText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign:'center',
        paddingHorizontal:18,
        paddingVertical:10,
      },
      flagIcon:{
        height: 20,
        width: 20,
      },
      countryCodeText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      signInButton:{
        backgroundColor:Colors.DEFAULT_GREEN,
        borderRadius:8,
        marginHorizontal:20,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
      },
      signInButtonText:{
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color:Colors.DEFAULT_WHITE,
        fontFamily:Fonts.POPPINS_MEDIUM,
      },
  });

export default VerificationScreen;