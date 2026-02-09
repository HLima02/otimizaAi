import { Redirect } from 'expo-router'
import React from 'react'

export default function index() {
  const logged = true 

  if(!logged) {
    return <Redirect href='/(auth)/signin' /> 
  }

  return  <Redirect href='/(root)/dashBoard' /> 
}