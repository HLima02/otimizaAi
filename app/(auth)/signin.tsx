import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import logo from '@/assets/images/icon.png'
import { Link } from 'expo-router'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}  />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='E-mail'
        value={email}
        onChangeText={(val) => setEmail(val)}
        style={styles.inputStyle} />
        <TextInput
        placeholder='Senha'
        value={password}
        onChangeText={(val) => setPassword(val)}
        style={styles.inputStyle} />

        <Link href="/" style={{marginVertical: 20}}>
          <Text>Esqueceu a senha? </Text>
        </Link>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.login}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 20,
            color: '#fff'}}>Login</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.loginGoogle}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 20,
            color: '#000'}}>Google</Text>
        </TouchableOpacity>

        <Link href="/signup" style={{marginVertical: 20}}>
        <Text>Não possui uma conta? <Text style={{color: 'blue'}}>Cadastrar</Text></Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  logoContainer: {
   
  },
  logo: {
    width: 270
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    width: '95%',
    height: 56,
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    fontSize: 25,
    marginVertical: 10
  },
  login: {
    width: '95%',
    borderWidth: 2,
    boxSizing: 'border-box',
    borderColor: '#000',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15
  },
  loginGoogle: {
    width: '95%',
    marginTop: 15,
    borderWidth: 2,
    boxSizing: 'border-box',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15
  }
})