import userPhoto from '@/assets/images/user_mock.jpeg'
import { useApp } from '@/context/AppContext'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DashBoard() {
  const { userData } = useApp()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDataContainer}>
        <Text style={styles.userName}>Olá, {userData.name}</Text>

        <View style={styles.userImageArea}>
          <Image source={userPhoto} style={styles.userPhoto}  />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff' ,
    flex: 1
  },
  userDataContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userImageArea: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  userPhoto: {
    width: 50, 
    height: 50,
    borderRadius: 25
  }
})