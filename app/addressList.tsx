import HeaderTitle from '@/components/HeaderTitle'
import RowCardItem from '@/components/RowCardItem'
import { useApp } from '@/context/AppContext'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import polyline from '@mapbox/polyline'
import { useNavigation } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;

export default function AddressList() {
  const [optimizedAddresses, setOptimizedAddresses] = useState<any[]>([])
  const [routePolyline, setRoutePolyline] = useState<any[]>([])

  const { addressList, setAddressList, userLocation } = useApp()
  const navigate = useNavigation()
  const bottomSheetRef = useRef<BottomSheet>(null);

  const origin = {
    lat: userLocation.coords.latitude,
    lng: userLocation.coords.longitude
  }

  useEffect(() => {
    async function loadOptimizedRoutes(){
      const response = await fetch(
        'https://routes.googleapis.com/directions/v2:computeRoutes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiUrl,
            'X-Goog-FieldMask': '*',
          },
          body: JSON.stringify({
            origin: {
              location: {
                latLng: {
                  latitude: origin.lat,
                  longitude: origin.lng,
                },
              },
            },
            destination: {
              location: {
                latLng: {
                  latitude: origin.lat,
                  longitude: origin.lng,
                },
              },
            },
            intermediates: addressList.map((addr:any) => ({
              location: {
                latLng: {
                  latitude: addr.details.geometry.location.lat,
                  longitude: addr.details.geometry.location.lng,
                },
              },
            })),
            optimizeWaypointOrder: true,
            travelMode: 'DRIVE',
            routingPreference: 'TRAFFIC_AWARE',
          }),
        }
      )
      
      const data = await response.json()
      const route = data.routes[0]

      const ordered = route.optimizedIntermediateWaypointIndex.map(
        (index: number) => addressList[index]
      )

      setOptimizedAddresses(ordered)
      //console.log("Endereços otimizados", optimizedAddresses[0].details.address_components[1].short_name)

      // 2️⃣ polyline decodificada
      const decoded = polyline
        .decode(route.polyline.encodedPolyline)
        .map(([lat, lng]) => ({
          latitude: lat,
          longitude: lng,
        }))

      setRoutePolyline(decoded)
    }
    
    loadOptimizedRoutes()
  }, [])
  
  return (
    <View style={styles.container}>
      <HeaderTitle>
        Listagem de endereços
      </HeaderTitle>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: origin.lat,
          longitude: origin.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Origem */}
        <Marker
          coordinate={{
            latitude: origin.lat,
            longitude: origin.lng,
          }}
          title="Você"
        />

        {/* Endereços otimizados */}
        {optimizedAddresses.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.details.geometry.location.lat,
              longitude: item.details.geometry.location.lng,
            }}
            title={`${index + 1} - ${item.details.address_components[1].short_name}`}
          />
        ))}

        {/* Rota */}
        {routePolyline.length > 0 && (
          <Polyline
            coordinates={routePolyline}
            strokeWidth={4}
          />
        )}
      </MapView>


      <BottomSheet
        snapPoints={['30%', '60%', '100%']}
        ref={bottomSheetRef}
        //onChange={handleSheetChanges}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.containerTitle}>Suas paradas</Text>

        </BottomSheetView>
        {/* FlashList para renderização da lista de endereços */}

        <View style={{marginTop: 50, paddingHorizontal: 8}}>
          {optimizedAddresses.length > 0 && 
            optimizedAddresses.map((item: any, index:any) => (
              <RowCardItem key={index} address={item.data} />
            ))
          }
        </View>
        
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowCardBox: {
    marginTop: 120,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    zIndex: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backBtn: {
    borderColor: '#000',
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 15 
  },
  checkBtn: {
    backgroundColor: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 36,
    alignItems: 'center',
    width: '100%'
  },
  containerTitle: {
    fontSize: 19,
    fontWeight: 'bold'
  }
})