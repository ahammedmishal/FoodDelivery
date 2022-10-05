import React ,{useState,useRef} from 'react';
import { View, Text, StyleSheet, StatusBar ,FlatList} from 'react-native';
import { Colors,Fonts,General} from '../constants';
import { WelcomeCard ,Separator} from '../components';
import { Display } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const pageStyle = isActive =>
isActive
  ? styles.page
  : {...styles.page,backgroundColor:Colors.DEFAULT_GREY};

const Pagination = ({index})=>{
  return(
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_,i) =>
        i === index ? (
        <View style={pageStyle(true)} key={i}/>
        ) : (
          <View style={pageStyle(false)} key={i}/>
        ),
      )}
    </View>
  )
}

const WelcomeScreen = ({navigation}) => {

  const [welcomeListIndex,setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed})=>{
    setWelcomeListIndex(changed[0].index);
  })
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold:50})

  const pagescroll = () =>{
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex
    });
  }

  return (
    <View style={styles.container}>

      <StatusBar
       barStyle={'dark-content'}
       backgroundColor={Colors.DEFAULT_WHITE}
       translucent
       />
       <Separator height={StatusBar.currentHeight}/>

       <Separator height={Display.setHeight(8)}/>

      <View style={styles.welcomeListConatiner}>

        <FlatList
          ref={welcomeList}
            data={General.WELCOME_CONTENTS}a
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            overScrollMode={'never'}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
            renderItem={({item})=><WelcomeCard {...item}/>}
        />

      </View>

      <Separator height={Display.setHeight(8)}/>

      <Pagination index={welcomeListIndex}/>

      <Separator height={Display.setHeight(8)}/>

      {welcomeListIndex === 2 ? (
        <TouchableOpacity style={styles.gettingStartedButton} activeOpacity={.8}>
          <Text onPress={()=>navigation.navigate("Signin")} style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          activeOpacity={.8}
          onPress={() =>welcomeList.current.scrollToEnd()}
          style={{marginLeft:10}}>
              <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={.8}
          onPress={() =>pagescroll()}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.DEFAULT_WHITE
  },
  welcomeListConatiner:{
    height: Display.setHeight(60),
  },
  pageContainer:{
    flexDirection:'row'
  },
  page:{
    height:8,
    width:15,
    backgroundColor:Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal:5,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width: Display.setWidth(90),
    alignItems:'center'
  },
  buttonText:{
    fontSize:16,
    color:Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight:16 * 1.4,
  },
  button:{
    backgroundColor:Colors.LIGHT_GREEN,
    paddingVertical:20,
    paddingHorizontal:11,
    borderRadius:32,
  },
  gettingStartedButton:{
    backgroundColor:Colors.DEFAULT_GREEN,
    paddingVertical:5,
    paddingHorizontal:40,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    elevation:2,
  },
  gettingStartedButtonText:{
      fontSize:20,
      color:Colors.DEFAULT_WHITE,
      lineHeight: 20 * 1.4,
      fontFamily:Fonts.POPPINS_MEDIUM
  }
});

export default WelcomeScreen;