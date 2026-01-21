// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;


// export default function AddressInput() {
//   return (
//    <GooglePlacesAutocomplete
//     placeholder='Endereço'
//     minLength={1} 
//     debounce={200}
//     onFail={(error) => console.log("Erro Google:", error)}
//     onNotFound={() => console.log("Nada encontrado")}
//     fetchDetails={true}
//     onPress={(data, details = null) => {
//       setAddress(data.description);
//       console.log("Selecionado:", data.description);
//     }}
//     query={{
//       key: apiUrl,
//       language: 'pt-br',
//       components: "country:br",
//       location: userLocation
//       ? `${userLocation.lat},${userLocation.lng}`
//       : undefined,
//       radius: 5000,
//       type: "address"
//     }}
//     enablePoweredByContainer={false}
//     styles={{
//       textInput: isFocus ? styles.textInputFocus :  styles.textInput,
//       container: styles.inputContainer
//     }}
//     textInputProps={{
//       onFocus: () => setIsFocus(true),
//       onBlur: () => setIsFocus(false)
//     }}
//   />
//   )
// }