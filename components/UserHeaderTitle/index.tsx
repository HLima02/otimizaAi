import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserHeaderTitle({userName, userAvatarUrl}: any) {
  const router = useRouter();

  return (
   <View style={styles.userDataContainer}>
      <Text style={styles.userName}>Olá, {userName}</Text>

      <TouchableOpacity 
      onPress={() => router.push('/(root)/screens/userData')}
      style={styles.userImageArea}>
        <Image source={userAvatarUrl} style={styles.userPhoto}  />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   userDataContainer: {
    width: '100%',
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
  },
})