import React,{useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData from "../assets/data/categoriesdata";
import popularData from "../assets/data/populardata";

export default function HomeScreen() {   
      
    const renderCategoryItem=({item})=>{
        return(
            <>
            <TouchableOpacity style={[styles.categoryItemWrapper,
            {
                backgroundColor: item.selected ? colors.primary : 'white',
                marginLeft: item.id == 1 ? 20:0,
            }]}>
            <Image style={styles.categoryItemImage} source={item.image}/>
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <View style={[styles.categorySelectWrapper,
            {
                backgroundColor: item.selected ? 
                '#fff' : colors.secondary
            }]}>
                <Feather name="chevron-right" size={8} 
                style={styles.categorySelectIcon}
                color={item.selected ? 'black':'#ffffff'}/>
            </View>
            </TouchableOpacity>
            </>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/profile.png')}
                    style={styles.profile} />
                <Feather name="menu" size={24} color={colors.textDark} />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.subtitle}>Food</Text>
                <Text style={styles.title}>Delivery</Text>
            </View>
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <TextInput style={styles.searchText} placeholder="Search" />
                </View>
            </View>
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true} 
                        />
                </View>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    subtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },
    title: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textDark,
        borderBottomWidth: 2
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textLight
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        paddingHorizontal: 20,
        fontSize: 16
    },
    categoriesWrapper: {
        marginTop: 30
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper:{
        backgroundColor: colors.primary,
        marginRight: 20,
        borderRadius: 20
    },
    categoryItemImage:{
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain'
    },
    categoryItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20
    },
    categorySelectIcon:{
        alignSelf: 'center'
    },
})