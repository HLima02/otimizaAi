import { Tabs } from 'expo-router';
import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {
  return (
    <Tabs 
      initialRouteName='dashBoard'
      >
      <Tabs.Screen 
        name='dashBoard' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />
      <Tabs.Screen 
        name='createRoute' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign name="plus" size={24} color="black" />
          ),
        }} />
      <Tabs.Screen 
        name='finance' 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="finance" size={24} color="black" />
          ),
        }} /> 
    </Tabs>
  )
}