import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import colors from "./assets/colors/colors";

export default function App(){
  return(
    <View >
      <Text style={styles.head}>Hello How are you</Text>
      <Text style={{fontSize: 32}}>Hello How are you</Text>
      <Image source={require('./assets/images/Onboard1.png')} style={{height: 300, width: 300}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  head:{
    fontFamily: 'OpenSans-Regular',
    fontSize:32,
    color: colors.blue
  }
})