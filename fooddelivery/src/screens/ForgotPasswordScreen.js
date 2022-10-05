import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Separator } from '../components';
import { Colors, Fonts } from '../constants';
import { Display } from '../utils';

const ForgotPasswordScreen = ({navigation}) => {
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
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.content}>Enter your email, so that we can help you to recover your password.</Text>

      <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Feather 
            name='mail' 
            size={22} 
            color={Colors.DEFAULT_GREY}
            style={{marginRight:10}}
            />
            <TextInput
             placeholder="Email" 
             placeholderTextColor={Colors.DEFAULT_GREY}
             selectionColor={Colors.DEFAULT_GREY}
             style={styles.inputText}
             />
          </View>
      </View>
      <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Reset Password</Text>
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
        backgroundColor:Colors.LIGHT_GREY,
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY,
        justifyContent:'center'
      },
      inputSubContainer:{
          flexDirection:'row',
          alignItems:'center'
      },
      inputText:{
        fontSize: 18,
        textAlignVertical: 'center',
        padding:0,
        height:Display.setHeight(6),
        color:Colors.DEFAULT_BLACK,
        flex: 1,
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

export default ForgotPasswordScreen;