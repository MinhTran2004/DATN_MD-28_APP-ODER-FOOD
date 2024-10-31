import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../css/CSSPayment";
import ComponentPayment from "../component/Component_Payment";

export default function ScreenPayment({ navigation }: any) {
    return (
        <ScrollView>
            <View>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name="arrow-left" style={{ fontSize: 28 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* address */}
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

                <View style={styles.container_list_product}>
                    <Text style={styles.text_title}>Sản phẩm</Text>
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                </View>

                {/* method payment */}
                <View style={styles.container_method_payment}>
                    <ComponentPayment.MethodPayment icon={'wallet'} name={'Payment Methods'} text={'E-Wallet'} />
                    <View style={styles.line} />
                    <ComponentPayment.MethodPayment icon={'shopping-sale'} name={'Get Discounts'} text={'Discount 20%'} />
                </View>

                {/* detail payment */}
                <View style={styles.container_detail_payment}>
                    <ComponentPayment.DetailsPayment text={'Subtotal'} price={'24.00'} />
                    <ComponentPayment.DetailsPayment text={'Delivery'} price={'2.00'} />
                    <ComponentPayment.DetailsPayment text={'Promo'} price={'4.80'} />
                    <View style={styles.line} />
                    <ComponentPayment.DetailsPayment text={'ToTal'} price={'21.20'} />
                </View>

                <TouchableOpacity style={styles.buton_payment} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.text_payment}>Thanh Toán - $21.20</Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    )
}