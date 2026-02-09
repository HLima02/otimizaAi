import { Tabs } from 'expo-router'
import React from 'react'

export default function Layout() {
  return (
    <Tabs 
    initialRouteName='dashBoard'>
      <Tabs.Screen name='dashBoard' />
      <Tabs.Screen name='createRoute' />
      <Tabs.Screen name='finance' /> 
    </Tabs>
  )
}