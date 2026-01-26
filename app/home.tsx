import HeaderTitle from "@/components/HeaderTitle";
import RouteMap from "@/components/RouteMap";
import RouteMapBottomSheet from "@/components/RouteMapBottomSheet";
import { useApp } from "@/context/AppContext";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ;

export default function Home() {
  const { addressList, setAddressList } = useApp()
  const navigation = useNavigation()

  return (
    <View style={{flex: 1}}>
      <HeaderTitle>Roteirize seus endereços</HeaderTitle>

      <View style={{flex: 1}}>
        <RouteMap />
        <RouteMapBottomSheet />

        {addressList.length > 0 && 
          <View style={styles.RouteCtaContainer}>
            <TouchableOpacity style={styles.RouteCta}
            onPress={() => navigation.navigate('addressList')}>
              <Text style={styles.RouteCtaText}>Roteirizar paradas</Text>
            </TouchableOpacity>
          </View>
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
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    zIndex: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBtn: {
    backgroundColor: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  checkBtnDisabled: {
    backgroundColor: '#000',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    opacity: 0.5
  },
   RouteCtaContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    zIndex: 200
  },
  RouteCta: {
    backgroundColor: '#000',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15
  },
  RouteCtaText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
