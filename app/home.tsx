import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import { ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import backgroundImage from '../assets/images/initial_background.jpg';

export default function home() {
  return (
    <View style={styles.containerBox}>
      <ImageBackground 
      source={backgroundImage} 
      style={{flex: 1}}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Criar rota</Text>

          <TouchableOpacity style={styles.wrapper}>
            <BlurView intensity={40} tint='light' style={styles.blur}>
              <View style={styles.inner}>
                <AntDesign name="plus" size={40} color="#fff" />
              </View>
            </BlurView>
          </TouchableOpacity>
        </View>
        
        
      </ImageBackground >
    </View>
  )
}

const styles = StyleSheet.create({
  containerBox: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  content: {
    flex: 1,
    padding: 24,
    zIndex: 2,
    justifyContent: 'center',
    gap: 30
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  wrapper:{
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 'auto',
  },
  blur: {
    flex: 1,
    borderRadius: 50
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth:2,
    borderColor: 'rgba(255,255,255,0.35)',
    borderRadius: 50
  }
})