import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
export default function SplashScreen({ navigation }: any) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },3000)
    },[])
    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fefefe',
        paddingHorizontal: 10,
        justifyContent:'center',
    },
    img_logo: {
        width: 200,
        height: 180,
    }
})
