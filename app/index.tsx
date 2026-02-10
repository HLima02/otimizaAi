import { useAuth } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function index() {
  const { isSignedIn, isLoaded } = useAuth()

  if(!isLoaded) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  if(isSignedIn) {
    return  <Redirect href='/(root)/dashBoard' /> 
  }

  return <Redirect href='/(auth)/signin' /> 
}