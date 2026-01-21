import { AppProvider } from '@/context/AppContext'
import React from 'react'
import Home from './home'

export default function index() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}