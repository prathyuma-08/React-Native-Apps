import React from 'react';
import {View,Text, TouchableOpacity,Image,StyleSheet} from 'react-native';

export default function ListItem({name,symbol,currentPrice, priceChange, logoUrl}){

    const priceChangecolor = priceChange>0?'#34C759':'#FF3B30';
    return(
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source={{uri: logoUrl}}
                    style={styles.image}/>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                <Text style={styles.title}>${currentPrice}</Text>
                    <Text style={[styles.subtitle,{color:priceChangecolor}]}>{priceChange.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    itemWrapper:{
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        height: 48,
        width: 48
    },
    titleWrapper:{
        marginLeft: 8
    },
    title:{
        fontSize: 18,
        color: 'black'
    },
    subtitle:{
        fontSize: 14,
        color: '#A9ABB1',
        marginTop: 4
    },
    rightWrapper:{
        alignItems: 'flex-end'
    }
})