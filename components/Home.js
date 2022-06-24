import React from 'react';
import { View, Text, FlatList,StyleSheet, ScrollView, Image,TouchableOpacity,ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';
import profile from '../assets/images/person.png';

export default function Home({ navigation }) {

    const renderDiscoverItem = () =>{
        return(
            <TouchableOpacity>
                <ImageBackground source={item.image}
                 style={styles.discoverItem}
                 imageStyle={styles.discoverItemImage}>
                <Text style={styles.discoverItemTitle}>{item.title}</Text>
                <View style={styles.discoverItemLocationWrapper}>
                    <Entypo name="location-pin" size={18} color={colors.white}/>
                    <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
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
                        <Text style={[styles.discoverCategory,{color:colors.orange}]}>All</Text>
                        <Text style={styles.discoverCategory}>Destination</Text>
                        <Text style={styles.discoverCategory}>Cities</Text>
                        <Text style={styles.discoverCategory}>Experiences</Text>
                    </View>
                    <FlatList
                    data={discoverData}
                    renderITem={renderDiscoverItem}
                    keyExtractor={(item)=>item.id}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}/>
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
        marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.black
    },
    CategoriesWrapper: {
        flexDirection: 'row',
        marginTop: 20
    },
    discoverCategory: {
        color: colors.gray,
        marginRight: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    discoverItem:{
        height: 170,
        width: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage:{
        borderRadius: 20
    },
    discoverItemTitle:{

    },
    discoverItemLocationWrapper:{

    },
    discoverItemLocationText:{

    },      
})