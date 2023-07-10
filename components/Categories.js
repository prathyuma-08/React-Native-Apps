import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../assets/colors/colors";

export default function Categories({ route, navigation }) {
    const { item } = route.params;
    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.itemsWrapper}>
                <MaterialCommunityIcons style={styles.icon} name="food" size={20}/>
                <Text style={styles.listItem}>{item.name}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.image} source={item.image} />
            </View>
            <FlatList
                data={item.choices}
                renderItem={renderIngredientsItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.endWrapper}>
                <Text style={styles.endText}>Ready to Order!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 35,
        color: colors.textDark
    },
    titleWrapper: {
        paddingHorizontal: 20,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    image:{
        height: 100,
        width: 100,
        resizeMode:'contain'
    },
    listContainer:{
        flex: 1
    },
    itemsWrapper:{
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: colors.secondary,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        resizeMode: 'contain',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    listItem:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: 'white',
        margin: 10
    },
    endWrapper:{
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        paddingVertical: 25,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    endText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10
    },
    icon:{
        marginHorizontal: 10
    }
})