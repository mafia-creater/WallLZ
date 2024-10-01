import { Bottomsheet } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, wallpaper } from "@/hooks/useWallpapers";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";
import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | wallpaper>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor="white"
        headerImage={
          <Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.uri ?? "" }} />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
          <FlatList 
          data={wallpapers.filter((_, index) => index % 2 === 0)}
          renderItem={({item}) => <View style={styles.ImageContainer}><ImageCard onPress={() => {
            setSelectedWallpaper(item);
          }} wallpaper={item} /></View>}
          keyExtractor={(item) => item.uri}
          />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList 
          data={wallpapers.filter((_, index) => index % 2 !== 0)}
          renderItem={({item}) => <View style={styles.ImageContainer}><ImageCard onPress={() => {
            setSelectedWallpaper(item);
          }} wallpaper={item} /></View>}
          keyExtractor={(item) => item.uri}
          />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <Bottomsheet wallpaper={selectedWallpaper} onclose={() => setSelectedWallpaper(null)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex:1,
    padding: 5, // Add padding for better spacing
  },
  ImageContainer: {
    paddingVertical: 8,

  },
});