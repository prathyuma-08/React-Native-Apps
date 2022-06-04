import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import colors from "./assets/colors/colors";
import Icon from 'react-native-vector-icons/Ionicons';

export default function App(){
  return(
    <View>
      <Text style={styles.text}>
        Hello Everyone!
      </Text>
      <Icon name="rocket" size={30} color='blue'/>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.price
  }
})