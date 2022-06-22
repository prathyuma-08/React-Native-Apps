 import React from 'react';
 import {View,Text,StyleSheet,Image} from 'react-native';

 const Chart=({
    currentPrice, logoUrl,symbol,name,priceChange,sparkLine
 })=>{
    console.log(sparkLine)
    return(
        <View style={styles.chartWrapper}>
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitles}>
                    <View style={styles.upperLeftTitle}>
                        <Image source={{uri:logoUrl}} style={styles.image}/>
                        <Text style={styles.subtitle}>{name} {{symbol}}</Text>
                    </View>
                    <Text style={styles.subtitle}>7d</Text>
                </View>
                <View style={styles.lowerTitles}>
                    <Text style={styles.boldTitle}>${currentPrice}</Text>
                    <Text style={styles.title}>{priceChange.toFixed(2)}%</Text>
                </View>
            </View>
        </View>
        );
 }
 const styles=StyleSheet.create({
    chartWrapper:{
        margin: 16
    },
    titleWrapper:{

    },
    upperTitles:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    upperLeftTitle:{},
    image:{},
    subtitle:{},
    lowerTitles:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boldTitle:{},
    title:{},        
 })

 export default Chart;