import React, { useRef, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import Chart from './components/Chart';
import { SAMPLE_DATA } from './assets/sampleData';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {

  const [selectedCoin, setSelectedCoin] = useState(null);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoin(item);
    bottomSheetModalRef.current.present();
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={
            ({ item }) => (
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChange={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
                onPress={() => openModal(item)} />
            )
          } />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {selectedCoin ? (
          <Chart
            currentPrice={selectedCoin.current_price}
            logoUrl={selectedCoin.image}
            symbol={selectedCoin.symbol}
            name={selectedCoin.name}
            priceChange={selectedCoin.price_change_percentage_7d_in_currency}
            sparkLine={selectedCoin.sparkline_in_7d.price} />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    marginTop: 60,
    paddingHorizontal: 16
  },
  largeTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 40,
      height: 80
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  }
})
