import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Text } from 'react-native';
import AddressInput from '../AddressInput';
import { styles } from './style';

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      snapPoints={['25%', '50%', '80%']}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.containerTitle}>Adicionar paradas</Text>

        <AddressInput />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default App;