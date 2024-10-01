import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { wallpaper } from '@/hooks/useWallpapers';

export const Bottomsheet = ({onclose, wallpaper}:{
    onclose: () => void;
    wallpaper: wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // define snap points
  const snapPoints = useMemo(() => ['95%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
    style={{marginTop: 50}}
      handleIndicatorStyle={{height: 0}}
      onClose={onclose}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose = {true}
      onChange={handleSheetChanges}
      handleStyle={{height: 0}}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{uri: wallpaper.uri}} />
        <View style={styles.detail}>
          <Text style={{fontSize:20}}>{wallpaper.name}</Text>
          <Button title='Download' />
        </View>
      </BottomSheetView>
    </BottomSheet>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '40%',
    borderRadius: 10,
  },
  detail:{
    flex: 0.3,
    alignItems: 'center',
  
  }
});
