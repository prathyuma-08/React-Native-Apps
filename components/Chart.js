import React from 'react';
import {Dimensions,View, Text, StyleSheet, Image } from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');
const Chart = ({
    currentPrice, logoUrl, symbol, name, priceChange, sparkLine
}) => {
    
    const priceChangecolor = priceChange > 0 ? '#34C759' : '#FF3B30';
    return (

            <View style={styles.chartWrapper}>
                <View style={styles.titleWrapper}>
                    <View style={styles.upperTitles}>
                        <View style={styles.upperLeftTitle}>
                            <Image source={{ uri: logoUrl }} style={styles.image} />
                            <Text style={styles.subtitle}>{name} {symbol.toUpperCase()}</Text>
                        </View>
                        <Text style={styles.subtitle}>7d</Text>
                    </View>
                    <View style={styles.lowerTitles}>
                        <Text style={styles.boldTitle}>${currentPrice.toFixed(3)}</Text>
                        <Text style={[styles.title, { color: priceChangecolor }]}>{priceChange.toFixed(2)}%</Text>
                    </View>
                </View>
                
            </View>

    );
}
const styles = StyleSheet.create({
    chartWrapper: {
        margin: 16
    },
    titleWrapper: {

    },
    upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1'
    },
    lowerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boldTitle: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
    },
})

export default Chart;