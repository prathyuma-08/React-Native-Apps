import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../assets/colors/colors";

export default function Details({route,navigation}){
    const {item} = route.params;
    const renderIngredientsItem=({item})=>{
        return(
            <View style={[styles.ingredientImageWrapper,{
                marginLeft: item.id=='1'?20:0,
            }]}>
                <Image source={item.image} style={styles.ingredientImage}/>
            </View>
        );
    }
    return(
        <View style={styles.container}>
           <View style={styles.headerWrapper}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
               <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={12} color={colors.textDark}/>
               </View>
               </TouchableOpacity>
               <View style={styles.headerRight}>
                   <MaterialCommunityIcons name="star" size={12} color='white' />
               </View>
           </View>
           <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
           </View>
           <View style={styles.priceWrapper}>
               <Text style={styles.price}>${item.price}</Text>
           </View>
           <View style={styles.infoWrapper}>
            <View style={styles.infoLeftWrapper}>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoTitle}>Size</Text>
                    <Text style={styles.infotitle}>{item.sizeName} {item.sizeNumber}"</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoTitle}>Crust</Text>
                    <Text style={styles.infotitle}>{item.crust}</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoTitle}>Delivery in</Text>
                    <Text style={styles.infotitle}>{item.deliveryTime} min</Text>
                </View>
            </View>
            <View>
                <Image source={item.image} style={styles.itemImage}/>
            </View>
           </View>
           <View style={styles.ingredientsWrapper}>
               <Text style={styles.ingredientsTitle}>Ingredients</Text>
               <View style={styles.ingredientsListWrapper}>
                    <FlatList 
                    data={item.ingredients}
                    renderItem={renderIngredientsItem}
                    keyExtractor={(item)=>item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
               </View>
           </View>
           <TouchableOpacity onPress={()=> alert("Your order has been placed!")}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>
                    Place an order
                </Text>
                <Feather name="chevron-right" size={18} color='black'/>
            </View>
           </TouchableOpacity>
        </View>
    );
}

const styles= new StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerRight:{
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2
    },
    headerLeft:{
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10
    },
    titleWrapper:{
        paddingHorizontal: 20,
        marginTop: 30
    },
    title:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        width: '70%'
    },
    priceWrapper:{
        marginTop: 20,
        paddingHorizontal: 20
    },
    price:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 32,
        color: colors.secondary
    },
    infoWrapper:{
        marginTop: 40,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoLeftWrapper:{
        paddingLeft: 20
    },
    infoItemWrapper:{
        marginBottom: 20
    },
    infoTitle:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight
    },
    infotitle:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark
    },
    itemImage:{
        resizeMode: 'contain',
        marginLeft: 40
    },
    ingredientsWrapper:{
        marginTop: 40,
    },
    ingredientsTitle:{
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark
    },
    ingredientsListWrapper:{
        paddingVertical: 20,
    },
    ingredientImageWrapper:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOpacity: 2
    },
    ingredientImage:{
        resizeMode: 'contain'
    },
    orderWrapper:{
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        paddingVertical: 25,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10
    }
})