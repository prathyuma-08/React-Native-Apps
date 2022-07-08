import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.textWrapper}>
            <Text style={styles.text}>This is the home page!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.body,
    },
    textWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    text:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: colors.black
    },
})