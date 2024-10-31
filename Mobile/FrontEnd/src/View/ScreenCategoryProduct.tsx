import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../css/CSSPayment";
import Component_Home from "../component/Component_Home";

export default function ScreenCategoryProduct({ navigation }: any) {
    return (
        <View>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Feather name="arrow-left" style={{ fontSize: 28 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Pizza</Text>
            </View>

            {/* body */}
            <View>
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
                <Component_Home.ProductVertical />
            </View>


        </View>
    )
}