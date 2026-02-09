import { Redirect } from 'expo-router'
import React from 'react'
import Home from './home'

export default function index() {
  const logged = false 

  if(!logged) {
    return <Redirect href='/(auth)/signin' /> 
  }

  return (
    <Home />
  )
}