import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useState } from 'react/cjs/react.production.min';
import { Separator } from '../components';
import { Colors, Fonts , Images , CountryCode } from '../constants';
import { StaticImageService } from '../services';
import { Display } from '../utils';

const RegisterPhoneScreen = ({navigation}) => {
  // const [selectCountry, setSelectCountry] = useState(
  //   CountryCode.find(country => (country.name === "India"))
  // )
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
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>
      <Text style={styles.title}></Text>
      <Text style={styles.content}>Enter your registered phone number to login.</Text>

      <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.countryListContainer}>
            <Image style={styles.flagIcon}/>
            <Text style={styles.countryCodeText}>+91</Text>
            <MaterialIcons name='keyboard-arrow-down' size={18}/>
          </TouchableOpacity>
          <View style={styles.phoneInputContainer}>
            <TextInput
              placeholder='Phone number'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={styles.inputText}
            />
          </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('VerificationScreen')}>
          <Text style={styles.signInButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:Colors.DEFAULT_WHITE
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
    inputContainer:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
    },
    countryListContainer:{
      flexDirection:'row',
      backgroundColor:Colors.LIGHT_GREY,
      width: Display.setWidth(22),
      marginRight: 10,
      borderRadius:8,
      height:Display.setHeight(6),
      justifyContent:'space-evenly',
      alignItems:'center',
      borderWidth:0.5,
      borderColor:Colors.LIGHT_GREY2,
    },
    phoneInputContainer:{
      flex:1,
      backgroundColor:Colors.LIGHT_GREY,
      paddingHorizontal:10,
      borderRadius:8,
      borderWidth:0.5,
      borderColor:Colors.LIGHT_GREY2,
      justifyContent:'center',
    },
    inputText: {
      fontSize: 18,
      textAlignVertical: 'center',
      padding: 0,
      height: Display.setHeight(6),
      color: Colors.DEFAULT_BLACK,
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

export default RegisterPhoneScreen;