import userPhoto from '@/assets/images/user_mock.jpeg';
import { useApp } from '@/context/AppContext';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function UserData() {
  const router = useRouter()
  const navigation = useNavigation()
  const { userData } = useApp()

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
      onPress={() => router.back()}
      style={styles.arrow_back}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="black" />
      </TouchableOpacity>
      <View style={styles.userBasicInfos}>
        <View style={styles.userImageArea}>
          <Image style={styles.userImage} source={userPhoto} />
          <TouchableOpacity 
          onPress={() => alert('editar')}
          style={styles.editContainer}>
            <AntDesign name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{userData.name}</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  arrow_back: {
    position: 'absolute',
    left: 20,
    top: 50
  },
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  userBasicInfos: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  userImageArea: {
    width: 142,
    height: 142,
    borderRadius: 70,
    position: 'relative'
  },
  userImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#00e0ff'
  },
  editContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#00e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  userName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})