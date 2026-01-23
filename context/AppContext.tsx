import * as Location from "expo-location";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AppContextData = {
  addressList: any
  setAddressList: any
  userLocation: any,
  setUserLocation: any
}

type AppProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextData>({} as AppContextData)

export function AppProvider({ children }:AppProviderProps) {
  const [addressList, setAddressList] = useState([])
  const [userLocation, setUserLocation] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if(status !== "granted") {
        console.log("Sem permissão para acessar localização")
        return
      }

      const loc = await Location.getCurrentPositionAsync({})
      setUserLocation(loc)
    })()

  }, [])

  return (
    <AppContext.Provider value={{addressList, setAddressList, userLocation, setUserLocation}}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}