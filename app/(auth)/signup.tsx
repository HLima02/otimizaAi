import { useSignUp } from '@clerk/clerk-expo';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import logo from '@/assets/images/icon.png';
import { Link, router } from 'expo-router';


export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')

  async function handleSignUp(){
    if(!isLoaded) return

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      })

       // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture code
      setPendingVerification(true)

    } catch(error) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(error, null, 2))
    }
  }

  // Handle submission of verification form
  async function onVerifyPress() {
    if(!isLoaded) return

    try{
      // Use the code the user provided to attempt verification
      const signUpAttemp = await signUp.attemptEmailAddressVerification({
        code
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if(signUpAttemp.status === 'complete'){
        await setActive({
          session: signUpAttemp.createdSessionId,
          navigate: async ({ session }) => {
            if(session?.currentTask) {
              console.log(session?.currentTask)
              return
            }

            router.replace('/(root)/(tabs)/dashBoard') 
          }
        })
      } else{
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttemp, null, 2))
      }
    } catch(error) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(error, null, 2))
    }
  }

  const handleCloseVerification = () => {
    setPendingVerification(false)
    setCode('')
    setName('')
    setEmail('')
    setPassword('')
  }

  if(pendingVerification) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
        style={{position:'absolute', top: 60, right: 30, zIndex: 50}}
        onPress={handleCloseVerification }>
          <FontAwesome name="close" size={30} color="black" />
        </TouchableOpacity>
        
        <MaterialIcons name="mark-email-unread" size={80} color="black" />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Verifique seu e-mail</Text>
        <TextInput
        value={code}
        onChangeText={(val) => setCode(val)}
        placeholderTextColor="#666666"
        style={{
          borderWidth: 1,
          borderColor: '#aaa',
          width: '100%',
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 10,
          marginVertical: 30
        }}
        placeholder='Digite o código enviado por e-mail' />
        <TouchableOpacity 
        onPress={onVerifyPress}
        style={{
          width: '100%',
          paddingVertical: 12,
          paddingHorizontal: 15,
          backgroundColor: '#000',
          borderRadius: 10
        }}>
          <Text style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18
          }}>Verificar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          marginVertical: 30
        }}>
          <Text style={{ color: '#aaa', fontSize: 16}}>Reenviar código</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}  />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Nome'
        value={name}
        onChangeText={(val) => setName(val)}
        style={styles.inputStyle} />
        <TextInput
        placeholder='E-mail'
        value={email}
        onChangeText={(val) => setEmail(val)}
        style={styles.inputStyle} />
        <TextInput
        placeholder='Senha'
        value={password}
        onChangeText={(val) => setPassword(val)}
        style={styles.inputStyle}
        secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity 
        onPress={handleSignUp}
        style={styles.login}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 20,
            color: '#fff'}}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginGoogle}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 20,
            color: '#000'}}>Google</Text>
        </TouchableOpacity>

        <Link href="/signin" style={{marginVertical: 20}}>
        <Text>Já possui uma conta? <Text style={{color: 'blue'}}>Login</Text></Text>
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
    marginTop: 30,
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