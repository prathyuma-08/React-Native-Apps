import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Home({navigation}){
    return(
        <View>
            <Text>Home page</Text>
            <Button onPress={() => navigation.navigate("Details")} title="Press me"/>
        </View>
    );
}