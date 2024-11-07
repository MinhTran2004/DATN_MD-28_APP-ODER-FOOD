
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

import styles from "../CSS/CSSPayment";

import CompmentOder from "../Component/CompomentOder";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function ScreenInForOder({ navigation }: any) {
    return (
        <ScrollView>
            <View>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <Feather name="arrow-left" style={{ fontSize: 28 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Chi tiết đơn hàng</Text>
                </View>



                {/* address */}
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginHorizontal: 10,
                    marginTop: 10,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={require("../Image/icon_location.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>Nguyễn Văn Toàn</Text>
                    <Text style={{ marginLeft: 10, color: 'gray', fontWeight: 'bold' }}>(+84) 0867198410</Text>

                </View>

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
                    </View>
                </View>

                <View style={styles.container_list_product}>
                    <Text style={styles.text_title}>Sản phẩm</Text>
                    <ScrollView style={{
                        maxHeight: 500,
                        marginHorizontal: 10,
                        marginVertical: 15,
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 20,
                    }} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 0 }}>
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                    </ScrollView>
                </View>





                <View style={styles.container_address}>
                    <Text style={styles.title_address}>Phương thức thanh toán</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Fontisto name={'wallet'} style={{ fontSize: 23, color: '#1bac4b' }} />
                            <Text style={{ marginLeft: 10, fontSize: 15 }}>Payment Methods</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>E-wallet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Fontisto name={'shopping-sale'} style={{ fontSize: 23, color: '#1bac4b' }} />
                            <Text style={{ marginLeft: 10, fontSize: 15 }}>Get Discounts</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>20%</Text>
                    </View>
                </View>

                
                <View style={styles.container_detail_payment}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Tổng phụ</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>50.500</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Vận chuyển</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>50.500</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Ngày đặt hàng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>20/02/2004</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Seri đơn hàng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>883287647836872346</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15,fontWeight:'bold' }}>Tổng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 ,fontWeight:'bold'}}>100000</Text>
                    </View>
                </View>





            </View>
        </ScrollView>
    )
}
