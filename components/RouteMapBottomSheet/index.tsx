import { useApp } from '@/context/AppContext';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import AddressInput from '../AddressInput';
import RowCardItem from '../RowCardItem';
import { styles } from './style';

const App = () => {
  const { addressList, setAddressList } = useApp()
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      snapPoints={['25%', '50%', '80%']}
      ref={bottomSheetRef}
      //onChange={handleSheetChanges}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.containerTitle}>Adicionar paradas</Text>

        {/* Componente de Input com autocomplite do google maps */}
        <AddressInput />
      </BottomSheetView>
      {/* FlashList para renderização da lista de endereços */}

      <View style={{marginTop: 120, paddingHorizontal: 8}}>
        {addressList.length > 0 && 
          addressList.map((item: any, index:any) => (
            <RowCardItem key={index} address={item.data} />
          ))
        }
      </View>
      
    </BottomSheet>
  );
};

export default App;