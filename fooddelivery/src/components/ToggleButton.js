import React,{useState} from 'react';
import { TouchableOpacity,View,Animated, StyleSheet, Easing } from 'react-native';
import { Colors } from '../constants';

const containerStyle = (size,isActive) => ({
    backgroundColor: isActive ? Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY,
    height:32 * size,
    width:64 * size,
    borderRadius:32 * size,
    padding:4 * size
})

const toggleStyle = (size,animatedValue) =>({
    height:24 * size,
    width:24 * size,
    backgroundColor:Colors.DEFAULT_WHITE,
    borderRadius:32,
    transform:[
        {
            translateX: animatedValue
        }
    ]
})

const ToggleButton = ({size}) => {

  const [isActive,setIsActive] = useState(false)
  const [animatedValue,setAnimatedValue] = useState(new Animated.Value(0))

  const toggleHandle = () =>{
    Animated.timing(animatedValue,{
        toValue: isActive ? 0 : 32 * size,
        duration: 250,
        easing: Easing.bounce,
        delay:0,
        useNativeDriver:true,
    }).start();
    setIsActive(!isActive);
  }

  return (
    <TouchableOpacity
     activeOpacity={.8}
     style={containerStyle(size,isActive)} 
     onPress={() =>toggleHandle()}>
      <Animated.View style={toggleStyle(size,animatedValue)}></Animated.View>
    </TouchableOpacity>
  );
};

export default ToggleButton;