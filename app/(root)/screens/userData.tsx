import userPhoto from '@/assets/images/user_mock.jpeg';
import { useApp } from '@/context/AppContext';
import { useClerk } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function UserData() {
  const router = useRouter()
  const { userData, routes } = useApp()
  const { signOut } = useClerk()

  async function handleSignOut(){
    try{
      await signOut()
      router.replace('/(auth)/signin')
    } catch(error) {
      console.error(JSON.stringify(error, null, 2))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
      onPress={() => router.back()}
      style={styles.arrow_back}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="black" />
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => handleSignOut()}
      style={styles.logOut}>
       <MaterialIcons name="logout" size={28} color="black" />
        <Text style={styles.logoutTxt}>Sair</Text>
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

        {routes.length > 0 ? (
          <>
            <Text style={styles.routesTitle}>Ultimas rotas</Text>

            <FlatList
              style={styles.lista}
              data={routes}
              keyExtractor={(item) => item.routeId}
              renderItem={({ item }) => (
                <View 
                key={item.routeId}
                style={styles.listItem}>
                  <Text style={styles.listItemTitle}>{item.date} - {item.routeName}</Text>
                </View>
              )}
            />
          </>
        ) : (
          <Text style={styles.empty_list}>Você ainda não realizou nenhuma rota :/</Text>
        )}
        
      </View>

      <TouchableOpacity 
      onPress={() => router.replace('/(root)/(tabs)/createRoute')}
      style={styles.criateRouteBtn}>
        <AntDesign name="plus" size={24} color="white" />
        <Text style={styles.CreateRoute} >
          Criar Rota
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  arrow_back: {
    position: 'absolute',
    left: 20,
    top: 50
  },
  logOut: {
    position: 'absolute',
    right: 20,
    top: 60 ,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutTxt: {
    fontSize: 17,
    fontWeight: 'bold'
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
    width: '100%',
    paddingHorizontal: 30
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
  },
  lista: {
    width: '100%',
    paddingHorizontal: 10
  },
  routesTitle: {
    textAlign: 'left',
    width: '100%',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#aaa',
    color: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  listItem: {
    paddingVertical: 10,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  empty_list: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  },
  criateRouteBtn: {
    backgroundColor: '#00e0ff',
    width: '90%',
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20
  },
  CreateRoute: {
    color: '#fff',
    fontSize: 20,
  },
})