import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function TabIcon({ children, focused }:any) {
  return (
    <View style={[ 
      {backgroundColor: focused ? "#fff" : ""},
       styles.tabBarIcon]}>
      {children}
    </View>
  )
}

export default function Layout() {
  return (
    <Tabs 
      initialRouteName='dashBoard'
      screenOptions={{
        tabBarActiveTintColor: '#00e0ff',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ddd',
          marginBottom: 35,
          height: 54,
          paddingTop: 7,
          display: 'flex',
          marginHorizontal: 25,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          borderRadius: 30,
          position: 'absolute',
          zIndex: 50,
        }
      }}
      >
      <Tabs.Screen 
        name='dashBoard' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <AntDesign name="home" size={24} color={focused ? '#00e0ff' : '#000'} />
            </TabIcon>
          ),
        }} />
      <Tabs.Screen 
        name='createRoute' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <AntDesign name="plus" size={24} color={focused ? '#00e0ff' : '#000'} />
            </TabIcon>
          ),
        }} />
      <Tabs.Screen 
        name='finance' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <MaterialCommunityIcons name="finance" size={24} color={focused ? '#00e0ff' : '#000'} />
            </TabIcon>
          ),
        }} /> 
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 110,
    borderRadius: 40
  }
})