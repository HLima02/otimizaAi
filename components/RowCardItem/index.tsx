import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function RowCardItem({ children }:any) {
  return (
    <View style={styles.rowCard}>
      <Text style={styles.rowCardText}>{children}</Text>
      <View style={styles.rowCardBoxIcons}>
        <TouchableOpacity onPress={() => alert(`Editar: ${children}`)}>
          <Feather name="edit" size={19} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(`Deletar: ${children}`)}>
          <Feather name="trash-2" size={19} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}