import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './style'

export default function DashBoardCardInfo({ title, data }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title} >{ title }</Text>
      <Text style={styles.data} >{ data }</Text>
    </View>
  )
}