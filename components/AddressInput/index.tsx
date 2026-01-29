import { useApp } from "@/context/AppContext";
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;


export default function AddressInput() {
  const [isFocus, setIsFocus] = useState(false)
  const placesRef = useRef(null)
  const [userLocation, setUserLocation] = useState<any>(null)
  const { addressList, setAddressList } = useApp()

  async function handleAddAddress(data:any, details:any){
    setAddressList((prev:any) => [...prev, {data, details}])
    console.log(addressList)
    await AsyncStorage.setItem('@address', JSON.stringify(addressList))
  }

  return (
   <GooglePlacesAutocomplete
    ref={placesRef}
    placeholder='Endereço'
    minLength={1} 
    debounce={200}
    onFail={(error) => console.log("Erro Google:", error)}
    onNotFound={() => console.log("Nada encontrado")}
    fetchDetails={true}
    onPress={async (data, details = null) => {
       setAddressList((prev:any) => [...prev, {data, details}])
       await AsyncStorage.setItem('@address', JSON.stringify(addressList))
      //console.log(addressList)
      // setAddress(data.description);
      // console.log("dados:", data);
      // console.log("detallhes:", data.description);
      placesRef.current?.setAddressText('');
    }}
    query={{
      key: apiUrl,
      language: 'pt-br',
      components: "country:br",
      location: userLocation
      ? `${userLocation.lat},${userLocation.lng}`
      : undefined,
      radius: 5000,
      types: "address"
    }}
    enablePoweredByContainer={false}
    styles={{
      textInput: isFocus ? styles.textInputFocus :  styles.textInput,
      container: styles.inputContainer,
      listView: styles.listView
    }}
    textInputProps={{
      onFocus: () => setIsFocus(true),
      onBlur: () => setIsFocus(false),
      InputComp: BottomSheetTextInput,
    }}
  />
  )
}
