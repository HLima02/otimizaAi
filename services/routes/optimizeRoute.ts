import { useApp } from "@/context/AppContext";
type LatLng = {
  latitude: number
  longitude: number
}

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;

export async function optimizeRoute( addresses: LatLng[]) {
  const { userLocation } = useApp()

  const origin = {
    lat: userLocation.latitude,
    lng: userLocation.longitude
  }
  
 
  //if (addresses.length < 2) return null


  // const waypoints = addresses
  //   .map(p => `${p.latitude},${p.longitude}`)
  //   .join('|')

  // const url =
  //   `https://maps.googleapis.com/maps/api/directions/json` +
  //   `?origin=${origin.latitude},${origin.longitude}` +
  //   `&destination=${origin.latitude},${origin.longitude}` +
  //   `&waypoints=optimize:true|${waypoints}` +
  //   `&key=${apiUrl}`

  // const response = await fetch(url)
  // const data = await response.json()

  // if (!data.routes?.length) {
  //   throw new Error('Nenhuma rota encontrada')
  // }

  // return data.routes[0]
}
