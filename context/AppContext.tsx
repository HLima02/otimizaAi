import { createContext, ReactNode, useContext, useState } from 'react'

type AppContextData = {
  addressList: string[]
  setAddressList: any
}

type AppProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextData>({} as AppContextData)

export function AppProvider({ children }:AppProviderProps) {
  const [addressList, setAddressList] = useState([])

  return (
    <AppContext.Provider value={{addressList, setAddressList}}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}