export interface wallpaper {
    uri: string;
    name: string;
}


export function useWallpapers(): wallpaper[] {
    return [{
        uri: 'https://i.pinimg.com/564x/28/f2/ce/28f2cead4e58b637c612644b2628e9e0.jpg',
        name: "hello wallpaper",
    },{
        uri: 'https://i.pinimg.com/236x/37/33/4a/37334a36da10015f427f06330da6dd54.jpg',
        name: "jungkook wallpaper",
    },{
        uri: 'https://i.pinimg.com/236x/d4/19/d5/d419d592a0a32584175e1b335d638550.jpg',
        name: "kid wallpaper",
    },
    {
        uri: 'https://i.pinimg.com/236x/c4/8d/72/c48d724c4d3c7c5968ba7c90e9b2a845.jpg',
        name: "spotify wallpaper",
    },
    {
        uri: 'https://i.pinimg.com/564x/b1/62/70/b162700ea8a0bf0dd16bfa759bb1f1eb.jpg',
        name: "Clove wallpaper",
    }
    ]
}