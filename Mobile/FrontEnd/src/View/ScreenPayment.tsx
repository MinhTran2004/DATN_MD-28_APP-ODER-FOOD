import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../CSS/CSSPayment";
import ComponentPayment from "../Component/Component_Payment";

export default function ScreenPayment({ navigation }: any) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#f8f8f8' }}>
                {/* Header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name="arrow-left" style={{ fontSize: 28, color: '#1bac4b' }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* Address */}
                <View style={styles.container_address}>
                    <Text style={styles.title_address}>Địa chỉ nhận hàng</Text>
                    <View style={styles.container_content_address}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../Image/icon_location.png")} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.name_address}>Home</Text>
                                <Text>63 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</Text>
                            </View>
                        </View>
                        <AntDesign name="right" style={{ fontSize: 23, color: '#51e180' }} />
                    </View>
                </View>

                {/* List of Products */}
                <View style={styles.container_list_product}>
                    <Text style={styles.text_title}>Sản phẩm</Text>
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                </View>

                {/* Payment Methods */}
                <View style={styles.container_method_payment}>
                    <ComponentPayment.MethodPayment icon={'wallet'} name={'Payment Methods'} text={'E-Wallet'} />
                    <View style={styles.line} />
                    <ComponentPayment.MethodPayment icon={'shopping-sale'} name={'Get Discounts'} text={'Discount 20%'} />
                </View>

                {/* Payment Details */}
                <View style={styles.container_detail_payment}>
                    <ComponentPayment.DetailsPayment text={'Subtotal'} price={'24.00'} />
                    <ComponentPayment.DetailsPayment text={'Delivery'} price={'2.00'} />
                    <ComponentPayment.DetailsPayment text={'Promo'} price={'4.80'} />
                    <View style={styles.line} />
                    <ComponentPayment.DetailsPayment text={'Total'} price={'21.20'} />
                </View>

                {/* Payment Button */}
                <TouchableOpacity style={styles.buton_payment} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.text_payment}>Thanh Toán - $21.20</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
