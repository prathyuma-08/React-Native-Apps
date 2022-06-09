import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../assets/colors/colors";

export default function Categories({route,navigation}){
    const {item} = route.params;
    const renderIngredientsItem=({item})=>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        );
    }
    return(
        <FlatList 
        data={item.choices}
        renderItem={renderIngredientsItem}
        keyExtractor={(item)=>item.id}
        showsHorizontalScrollIndicator={false}
        />
    
        );
}