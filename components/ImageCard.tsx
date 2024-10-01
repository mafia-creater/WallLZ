import {Image, View, StyleSheet, Pressable} from "react-native";
import { wallpaper } from "@/hooks/useWallpapers";
import { ThemedText } from "./ThemedText";

export function ImageCard({wallpaper, onPress}: {
    wallpaper: wallpaper,
    onPress?: () => void
}) {
    return <Pressable onPress={onPress}>
        <View>
            <Image source={{uri: wallpaper.uri}} style={style.image}/>

        </View>
     </Pressable>
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        height: 250,
        borderRadius: 4,
    }
})