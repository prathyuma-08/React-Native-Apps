import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height
export default function Details({ route, navigation }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={item.liked ? colors.orange : colors.gray} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <ScrollView style={styles.description} showsVerticalScrollIndicator={false}>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </ScrollView>
                </View>
                <View style={styles.infoWrapper}>
                    <View>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/price</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.duration}</Text>
                            <Text style={styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('Booking Confirmed!')}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 40
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.white
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    locationText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.white
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    description: {
        height: 95
    },
    descriptionTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.darkGray,
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    infoTitle: {
        fontFamily: 'Lato-Bold',
        color: colors.gray,
        fontSize: 12
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    infoText: {
        fontFamily: 'Lato-Bold',
        color: colors.orange,
        fontSize: 24
    },
    infoSubText: {
        fontFamily: 'Lato-Bold',
        color: colors.gray,
        fontSize: 14
    },
    buttonWrapper: {
        marginHorizontal: 20,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        color: colors.white,
        fontSize: 18
    }
})