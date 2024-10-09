import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ComponentHome from "../Component/Component_Home";
import Feather from 'react-native-vector-icons/Feather';
import styles from "../CSS/CSSCart";

export default function ScreenFavourite({ navigation }: any) {
    return (
        <ScrollView>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Yêu thích</Text>
            </View>
            <View style={{paddingHorizontal: 8}}>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
            </View>
        </ScrollView>
    )
}