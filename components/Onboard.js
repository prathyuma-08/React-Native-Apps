import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../assets/colors/colors";
import AppIntroSlider from 'react-native-app-intro-slider';


const data = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes, assignments, quizzes and more',
        image: require('../assets/images/Onboard1.png'),
    },
    {
        title: 'Stay on top of your education',
        text: 'Reduce your stress, increase your productivity',
        image: require('../assets/images/Onboard2.png'),
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Get started within five minutes',
        image: require('../assets/images/Onboard3.png'),
    },
];


export default function Onboard(props) {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        );
    }
    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    }
    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    }
    const handleDone = () => {
        props.handleDone();
    }
    const keyExtractor = (item) => item.title;

    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={data}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                onDone={handleDone}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    image: {
        marginVertical: 20
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSans-Bold',
        color: colors.black,
        textAlign: 'center',
        marginHorizontal: 60
    },
    text: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: colors.gray,
        marginHorizontal: 60,
        marginTop: 20,
        textAlign: 'center'
    },
    rightText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14
    },
    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotStyle: {
        backgroundColor: colors.lightBlue
    },
    activeDotStyle: {
        backgroundColor: colors.blue
    },
    
})