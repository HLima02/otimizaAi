import userPhoto from '@/assets/images/user_mock.jpeg'
import { useApp } from '@/context/AppContext'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import DashBoardCardInfo from '@/components/DashBoardCardInfo'
import ProgressCircle from '@/components/ProgressCircle'
import UserHeaderTitle from '@/components/UserHeaderTitle'

export default function DashBoard() {
  const { userData } = useApp()

  return (
    <SafeAreaView style={styles.container}>
      <UserHeaderTitle userName={userData.name} userAvatarUrl={userPhoto} /> 

      {/* Seção de faturamento  */}
      <View style={styles.billingsContainer}>
        <Text style={styles.billingTitle}>Faturamento</Text>

        <View>
          <ProgressCircle 
          currentGoal={userData.financialProfile.currentMonthGoal} 
          currentEarning={userData.financialProfile.currentMonthEarnings} />
        </View>
      </View>

      <View  style={styles.CardsInfoContainer}>
        <DashBoardCardInfo title="Pacotes entregues" data={200} />
        <DashBoardCardInfo title="Rotas feitas" data={3} />
      </View>

      <View  style={styles.CardsInfoContainer}>
        <DashBoardCardInfo title="Distacia estimada" data={'160km'} />
        <DashBoardCardInfo title="Tempo de trabalho" data={'32h'} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#fff' ,
    flex: 1
  },
  billingsContainer:{
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 20,
    padding: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 8px'
  },
  billingTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  CardsInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%'
  }
})