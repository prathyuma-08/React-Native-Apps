import React,{useState} from "react";
import { View, Text, StyleSheet, Image,ScrollView, TextInput, FlatList, Modal, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData from "../assets/data/categoriesdata";
import popularData from "../assets/data/populardata";

export default function HomeScreen({navigation}) {   

    const [modalVisible, setModalVisible] = useState(false);
    const onClick = () =>{
        setModalVisible(!modalVisible);
    }
      
    const renderCategoryItem=({item})=>{        
        return(
            <>
            <TouchableOpacity style={[styles.categoryItemWrapper,
            {
                backgroundColor: item.selected ? colors.primary : 'white',
                marginLeft: item.id == 1 ? 20:0,
            }]} onPress={()=>navigation.navigate('Categories',{item:item})}>
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
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
            <Modal animationType='fade' transparent={false} visible={modalVisible} onRequestClose={onClick}>
            <View style={styles.modalContainer}>
            <TouchableOpacity onPress={onClick}>
                <Feather style={styles.xWrapper} name="x" size = {40} color='black'/>
                </TouchableOpacity>              
                <Image style={styles.modalImage} source={require('../assets/images/profile.png')} />                 
                </View>
                </Modal>
                <TouchableOpacity onPress={onClick}>
                <Image source={require('../assets/images/profile.png')}
                    style={styles.profile} />
                </TouchableOpacity>
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
                        showsHorizontalScrollIndicator={false}
                        />
                </View>
            </View>
            <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>    
                {popularData.map((item) => (
                <TouchableOpacity  key={item.id} onPress={()=>navigation.navigate('Details',{item:item})}>
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
                    </TouchableOpacity>               
            ))}       
            </View>         
            </ScrollView>
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
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOpacity: 2
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
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    modalImage:{
        height: 300,
        width: 300,
        borderRadius: 300,
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: colors.textDark
    },
    xWrapper:{
        paddingHorizontal: 20,
        alignSelf: 'flex-end'
    },
    popularWrapper: {
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