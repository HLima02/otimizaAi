import AddressInput from "@/components/AddressInput";
import RowCardItem from "@/components/RowCardItem";
import { useApp } from "@/context/AppContext";
import { FlatList, StyleSheet, Text, View } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;

export default function Home() {
  const { addressList, setAddressList } = useApp()
  
  return (
    <View style={{flex: 1}}>
      <View style={styles.box} >
        <Text style={styles.boxTitle}>Roteirize seus endereços</Text>
        {/* <AddressInput /> */}
      </View>

      <View style={{ alignItems: 'center'}}>
        <AddressInput/>
      </View>

      <View style={styles.rowCardBox}>
        {addressList.length > 0 && 
          <FlatList 
          data={addressList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RowCardItem>{ item }</RowCardItem>
          )}
          />
        }
      </View>
    </View>
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
   elevation: 5,
  },
  boxTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  rowCardBox: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
