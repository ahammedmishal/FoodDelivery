import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  VerificationScreen,
  HomeScreen,
} from '../screens';
import {connect} from 'react-redux';
// import { useSelector,useDispatch } from 'react-redux'
import {SET_IS_APP_LOADING,SET_TOKEN,SET_FIRST_TIME_USE} from '../redux-toolkit/GeneralSlice';

const Stack = createStackNavigator();

const Navigators = ({token}) => {
  console.log(token);

  // const value = useSelector((state) => {
  //   return state
  // });

  // const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !token ? (
            <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="RegisterPhoneScreen" component={RegisterPhoneScreen}/>
            <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
            </>
          )
          :
          (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    token: state.generalState.token,
  };
};

export default connect(mapStateToProps)(Navigators);