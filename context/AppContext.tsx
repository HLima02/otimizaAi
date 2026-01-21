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
  const [addressList, setAddressList] = useState([
    'Av. Gen. Ataliba Leonel, 3173 - Parada Inglesa, São Paulo - SP, Brasil',
    'Rua Senador Felício dos Santos, 347 - Aclimação, São Paulo - SP, Brasil',
    'Rua Baltazar Lisboa, 487 - Vila Mariana, São Paulo - SP, Brasil'
  ])

  return (
    <AppContext.Provider value={{addressList, setAddressList}}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}