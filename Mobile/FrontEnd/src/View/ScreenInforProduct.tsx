import { Image, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather"
import styles from "../CSS/CSSInforProduct";
import { Text } from "react-native-paper";
import { useState } from "react";

export default function ScreenInforProduct({navigation}:any) {
    const [favourite, setFavourite] = useState(false);
    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={styles.icon_return} onPress={() => navigation.navigate("Main")}>
                <Feather name="arrow-left" style={{ fontSize: 30, color: "white" }} />
            </TouchableOpacity>

            <Image source={require('../Image/image_product_demo.png')} style={styles.image_product} />
            <View style={styles.container_infor}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product}>Mixed Salad BonBum</Text>
                        <Text style={styles.price_product}>$ 23.000.000</Text>
                    </View>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        {favourite ?
                            (<Image source={require('../Image/icon_showFavourite.png')} style={{ width: 25, height: 25 }} />)
                            :
                            (<Image source={require('../Image/icon_unFavourite.png')} style={{ width: 25, height: 25 }} />)
                        }
                    </TouchableOpacity>
                </View>
                <Text style={styles.des_product}>Giới thiệu sản phẩm</Text>
                <Text style={{ fontSize: 17 }}>Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú</Text>

            </View>

            <View style={styles.container_add_product}>
                <TouchableOpacity style={styles.btn_messenger}>
                    <Image source={require("../Image/icon_messenger.png")} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_cart}>
                    <Image source={require("../Image/cart.png")} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_sell}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
