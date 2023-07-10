import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
  return(
    <Tab.Navigator
    // tabBarOptions={{
    //   style: styles.tabBar,
    //   activeTintColor: colors.orange,
    //   inactiveTintColor: colors.gray,
    //   showLabel: false,
   // }}
     screenOptions={
      {tabBarActiveTintColor : "#F35D38",
      tabBarInactiveTintColor : "#D1D3D2",
      tabBarShowLabel: false,
    headerShown: false}
    }>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({color}) => <Entypo name="home" size={32} color={color}/>
      }}/>
      <Tab.Screen name="Liked" component={Liked}
      options={{
        tabBarIcon: ({color}) => <Entypo name="heart" size={32} color={color}/>
      }}/>
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color}/>
      }}/>
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  tabBar:{
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})