import { useApp } from '@/context/AppContext'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './style'

export default function RouteMap() {
  const { userLocation, addressList } = useApp()

  if(userLocation == null){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {
          addressList.map((item:any, index:any) => (
            <Marker 
              key={index}
              coordinate={{
                latitude: item.details.geometry.location.lat,
                longitude: item.details.geometry.location.lng,
              }}
              title={item.details.short_name}
            />
          ))
        }
      </MapView>
    </View>
  )
}