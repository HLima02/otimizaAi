import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from "expo-location";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AppContextData = {
  addressList: any
  setAddressList: any
  userLocation: any,
  setUserLocation: any,
  userData: any,
  setUserData: any,
  routes: any
}

type AppProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextData>({} as AppContextData)

export function AppProvider({ children }:AppProviderProps) {
  const [userData, setUserData] = useState({
    userId: 'user_01',
    name: "Hiago Lima",
    email: "hiago.liima02@hotmail.com",
    phone: "(13)997716553",
    photoUrl: "@/assets/images/initial_background.jpg",
    createdAt: "29/01/2026",
    workProfile: {
      platforms: ['Shopee'],
      routes: [],
      avgDeliveriesPerDay: 0
    },
    subscription: {
      plan: "free",
      status: true,
      expiresAt: null
    },
    stats: {
      totalRoutes: 0,
      totalPackages: 0,
      totalEarningsMonth: 0
    },
    financialProfile: {
      currentMonthGoal: 5000,
      currentMonthEarnings: 3000,
      goalProgressPercent: 0
    }
  })
  const [routes, setRoutes] = useState([
    {
      "userId": "user_01",
      "routeName": "Rota 01",
      "routeId": "wefdsarger",
      "date": "2026-02-01",
      "status": "completed",
      "summary": {
        "totalStops": 18,
        "totalPackages": 36,
        "distanceKm": 42.5,
        "earnings": 280
      }
    },
    {
      "userId": "user_01",
      "routeName": "Rota 02",
      "routeId": "gatyyry53",
      "date": "2026-02-02",
      "status": "completed",
      "summary": {
        "totalStops": 33,
        "totalPackages": 50,
        "distanceKm": 67.4,
        "earnings": 48
      }
    }
  ])
  const [financialHistory, setFinancialHistory] = useState([])
  const [monthlyGoal, setMonthlyGoal] = useState(null)
  const [addressList, setAddressList] = useState([])
  const [userLocation, setUserLocation] = useState(null)

  //busca rotas do storage
  async function getStorageAddress() {
    try {
      const data = await AsyncStorage.getItem('@address')

      if(data) {
        const list = JSON.parse(data)
        setAddressList(list)
      }
    } catch(error) {
      console.log('Erro ao buscar endereços do Storage', error)
    }
  }

  //UseEffect para pedir permissão para uso da localização do usuário
  useEffect(() => { 
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if(status !== "granted") {
        console.log("Sem permissão para acessar localização")
        return
      }

      const loc = await Location.getCurrentPositionAsync({})
      setUserLocation(loc)
      getStorageAddress()
    })()
  }, [])

  return (
    <AppContext.Provider value={{
      addressList, 
      setAddressList, 
      userLocation, 
      setUserLocation, 
      userData, 
      setUserData,
      routes
      }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}