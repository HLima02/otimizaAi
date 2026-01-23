import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type HeaderTitleProps = {
  children: string
}

export default function HeaderTitle({ children }:HeaderTitleProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>{ children }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
   backgroundColor: 'darkblue',
   paddingTop: 60,
   paddingBottom: 25,
   alignItems:'center',
   borderBottomLeftRadius: 55,
   borderBottomRightRadius: 55,
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 2},
   shadowOpacity: 0.1,
   shadowRadius: 10,
   elevation: 5,
  },
  boxTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})