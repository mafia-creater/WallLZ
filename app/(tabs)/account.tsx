import { Bottomsheet } from "@/components/BottomSheet";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return(
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <Text>Account</Text>
            <Button title="Saved Wallpapers" 
              onPress={() => {
                setPictureOpen(true);
              }}
            />
            {pictureOpen && <Bottomsheet onclose={() => setPictureOpen(false)} />}
        </View>
    </SafeAreaView>
  );
}