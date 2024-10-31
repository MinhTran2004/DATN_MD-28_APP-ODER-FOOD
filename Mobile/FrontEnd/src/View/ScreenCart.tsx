import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../css/CSSCart";
import ComponentCart from "../component/Component_Cart";

export default function ScreenCart({ navigation }: any) {
    return (
        <View style={styles.main}>

            <ScrollView style={{padding: 10}}>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="arrow-left" style={{fontSize: 30}} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* body */}
                <ComponentCart.CartVertical />
                <ComponentCart.CartVertical />
                <ComponentCart.CartVertical />
                <ComponentCart.CartVertical />
                <ComponentCart.CartVertical />
                <ComponentCart.CartVertical />
            </ScrollView>

            {/* footer */}
            <View style={styles.container_footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text_total}>Tổng tiền</Text>
                    <Text style={styles.text_total}>$ 20.000</Text>
                </View>

                <TouchableOpacity style={styles.btn_payment} onPress={()=> navigation.navigate('Payment')}>
                    <Text style={styles.text_payment}>Thanh toán</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}