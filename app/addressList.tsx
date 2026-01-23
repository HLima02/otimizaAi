import HeaderTitle from '@/components/HeaderTitle'
import RowCardItem from '@/components/RowCardItem'
import { useApp } from '@/context/AppContext'
import { useNavigation } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AddressList() {
  const { addressList, setAddressList } = useApp()
  const navigate = useNavigation()
  
  return (
    <View style={styles.container}>
      <HeaderTitle>
        Listagem de endereços
      </HeaderTitle>

      <View style={styles.rowCardBox}>
        {addressList.length > 0 && 
          <FlatList 
          data={addressList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RowCardItem address={item} />
          )}
          />
        }
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity 
        style={styles.backBtn}
        onPress={() => navigate.goBack()}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 18}}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.checkBtn}
        onPress={() => navigate.goBack()}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>Otimizar Rota</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowCardBox: {
    marginTop: 120,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    zIndex: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backBtn: {
    borderColor: '#000',
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 15 
  },
  checkBtn: {
    backgroundColor: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
})