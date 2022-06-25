import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';
import profile from '../assets/images/person.png';

export default function Home({ navigation }) {

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.id}
                onPress={() => navigation.navigate('Details',
                    { item: item })}>
                <ImageBackground source={item.image}
                    style={[styles.discoverItem, { marginLeft: item.id == '1' ? 20 : 0 }]}
                    imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    const renderActivityItem = ({ item }) => {
        return (
            <View key={item.id} style={[styles.activityItemWrapper,{
                marginLeft: item.id=="activities-1"?20:0
            }]}>
                <Image source={item.image} style={styles.activityImage} />
                <Text style={styles.activityText}>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.menuWrapper}>
                    <Feather name="menu" size={32} color={colors.black} />
                    <Image source={profile} style={styles.profileImage} />
                </View>
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.CategoriesWrapper}>
                        <Text style={[styles.discoverCategory, { color: colors.orange }]}>All</Text>
                        <Text style={styles.discoverCategory}>Destination</Text>
                        <Text style={styles.discoverCategory}>Cities</Text>
                        <Text style={styles.discoverCategory}>Experiences</Text>
                    </View>
                    <FlatList
                        data={discoverData}
                        renderItem={renderDiscoverItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} />
                    <View style={styles.activitiesWrapper}>
                        <Text style={styles.activitiesTitle}>Activities</Text>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivityItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    menuWrapper: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10
    },
    discoverWrapper: {
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.black
    },
    CategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20
    },
    discoverCategory: {
        color: colors.gray,
        marginRight: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginVertical: 15,
        marginRight: 20,
        paddingVertical: 15
    },
    discoverItemImage: {
        borderRadius: 20
    },
    discoverItemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white
    },
    activitiesWrapper: {
        paddingVertical: 20
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    activityImage: {
        marginTop: 10,
        width: 36
    },
    activityText: {
        marginTop: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.gray
    },
})