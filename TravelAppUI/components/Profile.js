import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>PROFILE</Text>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.nameWrapper}>
                    <Text style={styles.subhead}>Abhinav S</Text>
                    <Text style={styles.subhead}>29</Text>
                    <Text style={styles.subhead}>West Bengal</Text>
                    <Text style={styles.subhead}>India</Text>
                </View>
                <Image source={require('../assets/images/person.png')} style={styles.profile} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit profile</Text>
                <Entypo name="edit" size={20} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.divider} />
            <View style={styles.settingsWrapper}>
                <View style={styles.heading}>
                    <Text style={styles.header}>SETTINGS</Text>
                </View>
                <View style={styles.itemsWrapper}>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Manage Permissions</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Notifications</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Payment Method</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Privacy Policy</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Terms of Service</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Rate Us</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
                        </View>
                    </View>
                    <View style={styles.itemdivider}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Customer Service</Text>
                            <Entypo name="chevron-right" size={23} color={colors.orange} />
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
        backgroundColor: colors.white
    },
    headerWrapper: {
        marginTop: 40,
        marginHorizontal: 20,
        marginBottom: 20
    },
    header: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 28
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40
    },
    profile: {
        height: 110,
        width: 100
    },
    subhead: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        color: colors.black,
        marginBottom: 5
    },
    button: {
        backgroundColor: colors.orange,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        color: colors.white,
        fontSize: 20,
        padding: 10
    },
    divider: {
        height: 0.6,
        backgroundColor: colors.darkGray,
        marginTop: 10,
        marginHorizontal: 20
    },
    settingsWrapper: {
        marginHorizontal: 20
    },
    heading: {
        marginTop: 20
    },
    itemsWrapper: {
        marginHorizontal: 10,
    },
    itemText: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.darkGray,
    },
    itemdivider:{
        borderBottomWidth: 0.5,
        borderColor: colors.darkGray,
        padding: 3
    },
    item:{
        marginTop: 15,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }
}
)