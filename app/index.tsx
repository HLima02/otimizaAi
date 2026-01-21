import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;

export default function Index() {
  const [isFocus, setIsFocus] = useState(false)
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if(status !== "granted") return

      const loc = await Location.getCurrentPositionAsync({})
      setUserLocation({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude
      })
    })()
  }, [])

  return (
    <>
      <View style={styles.box} >
        <Text style={styles.boxTitle}>Roteirize seus endereços</Text>
        {/* <AddressInput /> */}
      </View>

      <View style={{ flex: 1, alignItems: 'center'}}>
        <GooglePlacesAutocomplete
          placeholder='Endereço'
          minLength={1} 
          debounce={200}
          onFail={(error) => console.log("Erro Google:", error)}
          onNotFound={() => console.log("Nada encontrado")}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setAddress(data.description);
             console.log("Selecionado:", data.description);
          }}
          query={{
            key: apiUrl,
            language: 'pt-br',
            components: "country:br",
            location: userLocation
            ? `${userLocation.lat},${userLocation.lng}`
            : undefined,
            radius: 5000,
            type: "address"
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: isFocus ? styles.textInputFocus :  styles.textInput,
            container: styles.inputContainer
          }}
          textInputProps={{
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false)
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
   backgroundColor: 'darkblue',
   paddingTop: 60,
   paddingBottom: 25,
   alignItems:'center',
   borderBottomLeftRadius: 55,
   borderBottomRightRadius: 55,
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 2},
   shadowOpacity: 0.1,
   shadowRadius: 10,
   elevation: 5
  },
  boxTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 30,
  },
  inputContainer: {
    width: '95%'
  },
  textInputFocus: {
    borderWidth: 1,
    borderColor: "#111184",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 30,
  },
})
