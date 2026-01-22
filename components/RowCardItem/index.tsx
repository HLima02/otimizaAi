import { useApp } from '@/context/AppContext';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function RowCardItem({ address, children }:any) {
  const { addressList, setAddressList } = useApp()
  //console.log(address.placeId)

  function handleDelete() {
    const newList = addressList.filter(
      (item) => item.place_id !== address.place_id
    )
    setAddressList(newList)
  }

  return (
    <View style={styles.rowCard}>
      <Text style={styles.rowCardText}>{address.description}</Text>
      <View style={styles.rowCardBoxIcons}>
        <TouchableOpacity onPress={() => alert(`Editar: ${children}`)}>
          <Feather name="edit" size={19} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete() }>
          <Feather name="trash-2" size={19} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}