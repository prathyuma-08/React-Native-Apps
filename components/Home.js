import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.leftheader}>
                    <View>
                        <Text style={styles.hello}>Hello,</Text>
                        <Text style={styles.name}>Alonzo Lee</Text>
                    </View>
                    <MaterialCommunityIcons name="hand-wave-outline" size={32} color={colors.yellow} />
                </View>
                <Image source={require('../assets/images/profile.png')} style={styles.profile} />
            </View>
            <View style={styles.body}>
                <View style={styles.searchWrapper}>
                    <Text style={styles.searchText}>Search</Text>
                    <Feather name="search" size={20} style={styles.searchIcon} />
                </View>
                <View style={styles.courseWrapper}>
                    <Text style={styles.courseText}>Courses</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <View style={styles.options}>
                            <View style={styles.optionIcon}>
                            <Fontisto name="fire" size={30} /></View>
                            <Text style={styles.optionText}>All Topic</Text>
                        </View>
                        <View style={styles.options}>
                            <View style={styles.optionIcon}>
                            <Fontisto name="fire" size={30} color = {colors.yellow}/></View>
                            <Text style={styles.optionText}>All Topic</Text>
                        </View>
                        </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    headerWrapper: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftheader: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    hello: {
        fontFamily: 'OpenSans-Regular',
        color: colors.gray,
        fontSize: 28
    },
    name: {
        fontFamily: 'OpenSans-Bold',
        color: colors.black,
        fontSize: 32
    },
    profile: {
        height: 100,
        width: 100
    },
    body: {
        flex: 1,
        backgroundColor: colors.body
    },
    searchWrapper: {
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    searchText: {
        padding: 10,
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        color: colors.gray
    },
    searchIcon: {
        marginRight: 10
    },
    courseWrapper: {
        marginHorizontal: 20,
        marginTop: 20
    },
    courseText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28,
        color: colors.black
    },
    options:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 20
    },
optionIcon:{
    backgroundColor: colors.selected,
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center'
},
optionText:{

},
Icon:{
    color: colors.white,
}
})