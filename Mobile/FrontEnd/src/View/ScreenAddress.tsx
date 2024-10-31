import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import styles from "../css/CSSCart";
import ComponentAddress from "../component/Component_Address";
import Component_Profile from "../component/Component_Profile";

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
                <Component_Profile.Item_Profile
                    name={"Thêm địa chỉ"}
                    icon={require("../Image/icon_home.png")}
                    navigation={navigation}
                    screen={'EditAddress'}
                    isEdit={false} // Thêm thuộc tính isEdit
                />
                <ComponentAddress.ItemAddress navigation={navigation} status={true} />
                <ComponentAddress.ItemAddress navigation={navigation} />
                <ComponentAddress.ItemAddress navigation={navigation} />
                <ComponentAddress.ItemAddress navigation={navigation} />
            </View>
        </ScrollView>
    );
}
