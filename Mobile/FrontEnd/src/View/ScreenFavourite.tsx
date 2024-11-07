import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, ImageBackground } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import styles from "../CSS/CSSCart";
import ComponentHome from "../Component/Component_Home";


export default function ScreenFavourite({ navigation }: any) {

    return (
        <View style={{ backgroundColor: '#fff', flex: 1, padding: 10 }}>
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 24, color: '#000' }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Yêu thích</Text>
            </View>

            <ScrollView>
                {/* header */}
                <View style={{ paddingHorizontal: 10, }}>
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                    <ComponentHome.ProductFavourite navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    )
}

