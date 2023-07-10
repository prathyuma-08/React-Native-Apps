import React, { useRef, useMemo,useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import Chart from './components/Chart';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { getMarketData } from './API/crypto';

export default function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
      const fetchMarketData = async () =>{
        const marketData = await getMarketData();
        setData(marketData);
      }
      fetchMarketData();
    },[]
  )

  const [selectedCoin, setSelectedCoin] = useState(null);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['45%'], []);

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
        style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
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
            priceChange={selectedCoin.price_change_percentage_7d_in_currency}/>)
            : null}
            {/* // sparkLine={selectedCoin.sparkline_in_7d.price}          */}
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
    shadowColor: 'black',
    shadowOffset: {
      width: 100,
      height: 100
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 100,
  },
})
