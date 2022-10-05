import React, {useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {
  SET_IS_APP_LOADING,
  SET_TOKEN,
  SET_FIRST_TIME_USE,
} from '../redux-toolkit/GeneralSlice';
import {GeneralAction} from '../actions';

const Stack = createStackNavigator();

const Navigators = () => {
  const {isAppLoading, token, isFirstTimeUse} = useSelector(
    state => state?.generalState,
  );

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : !token || token === null || token === '' ? (
          <>
            {isFirstTimeUse && (
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            )}
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="RegisterPhoneScreen"
              component={RegisterPhoneScreen}
            />
            <Stack.Screen
              name="VerificationScreen"
              component={VerificationScreen}
            />
          </>
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
