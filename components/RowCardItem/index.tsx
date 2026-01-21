import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export default function RowCardItem({ children }:any) {
  return (
    <View style={styles.rowCard}>
      <Text>{children}</Text>
    </View>
  )
}