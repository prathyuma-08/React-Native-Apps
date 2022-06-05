import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import popularData from '../assets/data/populardata';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';

export default function PopularCard() {
    return (
        <View style={styles.poplarWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map((item) => (
                <View style={[styles.popularCardWrapper, {
                    marginTop: item.id == 1 ? 10 : 20
                }]}>
                    <View>
                        <View>
                            <View style={styles.popularTopWrapper}>
                                <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                <Text style={styles.popularTopText}>top of the week</Text>
                            </View>
                            <View style={styles.popularTitlesWrapper}>
                                <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                <Text style={styles.popularTitleWeight}>Weight {item.weight}</Text>
                            </View>
                        </View>
                        <View style={styles.popularCardBottom}>
                            <View style={styles.addPizzaButton}>
                                <Feather name="plus" size={10} color={colors.textDark}/>
                            </View>
                            <View style={styles.ratingWrapper}>
                                <MaterialCommunityIcons name="star" size={10} color={colors.textDark}/>
                                <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.popularCardRight}>
                        <Image source={item.image} style={styles.popularCardImage}/>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    poplarWrapper: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    popularCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOpacity: 2
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popularTitlesWrapper:{
        marginTop: 20
    },
    popularTitlesTitle:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTitleWeight:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5
    },
    popularCardBottom:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton:{
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    ratingWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    rating:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5
    },
    popularCardRight:{
        marginLeft: 40,
    },
    popularCardImage:{
        width:210,
        height: 125,
        resizeMode: 'contain'
    }
})