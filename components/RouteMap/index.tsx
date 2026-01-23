import { useApp } from '@/context/AppContext'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './style'

export default function RouteMap() {
  const { userLocation } = useApp()

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
        <Marker
          coordinate={{
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
          }}
          title="Centro de SP"
        />
      </MapView>
    </View>
  )
}