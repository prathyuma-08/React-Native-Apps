import React from 'react';
import {View,Text,FlatList,StyleSheet,ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import liked from '../assets/data/likedData';

const renderlikedItem = ({ item }) => {
    return (
        <View key={item.id} style={styles.imageWrapper}>
            <ImageBackground style={styles.image} source={item.image}
            imageStyle={styles.imagestyle}>
                <View style={styles.textWrapper}>
                <Text style={styles.text}>{item.title}</Text>
                <Entypo name="heart" size={18} color={colors.white} style={styles.icon} />
                </View>
            </ImageBackground>
        </View>        
    );
};

export default function Liked(){
    return(
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
            <Text style={styles.header}>Top picks for you</Text>
            <MaterialCommunityIcons name="crown-circle-outline" size={40} color={colors.orange}/>
            </View>
            <View style={styles.listWrapper}>
            <FlatList
            data={liked}
            renderItem={renderlikedItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}/>
           </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
    },
    headerWrapper:{
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header:{
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.black
    },
    listWrapper:{
        marginHorizontal: 20,
        marginVertical: 20,
    },
    image:{
        height: 150,
        marginBottom: 15,
        justifyContent: 'flex-end'
    },
    imagestyle:{
        borderRadius: 15,
    },
    text:{
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginLeft: 10
    },
    imageWrapper:{
        justifyContent: 'flex-end',
    },
    textWrapper:{
        backgroundColor: colors.darkGray,
        borderTopLeftRadius: 15,
        padding: 5,
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        marginRight: 10
    }
})