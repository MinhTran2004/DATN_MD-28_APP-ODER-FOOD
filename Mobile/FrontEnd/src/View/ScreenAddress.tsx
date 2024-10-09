import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import styles from "../CSS/CSSCart";
import ComponentAddress from "../Component/Component_Address";
export default function ScreenAddress({ navigation }: any) {
    return (
        <ScrollView>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Địa chỉ</Text>
            </View>

            <View style={{ padding: 10 }}>
                <ComponentAddress.ItemAddress navigation={navigation} status={true} />
                <ComponentAddress.ItemAddress navigation={navigation} />
                <ComponentAddress.ItemAddress navigation={navigation} />
                <ComponentAddress.ItemAddress navigation={navigation} />
            </View>
        </ScrollView>
    )
}