import React,{useEffect} from 'react';
import { View, Text, StyleSheet ,StatusBar ,Image} from 'react-native';
import { Colors,Images,Fonts} from '../constants';
import { Display } from '../utils';


const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Welcome');
    },2000)
  },[])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.DEFAULT_GREEN} />
      <Image 
        style={styles.image}
        source={Images.PLATE}
        resizeMode="contain"
      />
      <Text style={styles.titleText}>FooDelivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN
  },
  image:{
      height: Display.setHeight(30),
      width: Display.setWidth(60),
  },
  titleText:{
      color:Colors.DEFAULT_WHITE,
      fontSize:32,
    fontFamily:Fonts.POPPINS_LIGHT
  }
});

export default SplashScreen;