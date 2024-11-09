import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../css/CSSInforProduct";
import { Text } from "react-native-paper";
import { useState } from "react";
const comments = [
    { name: 'Nguyen Van A', content: 'Đây là comment đầu tiên.' },
    { name: 'Tran Thi B', content: 'Chúc bạn một ngày tốt lành!' },
    { name: 'Le Van C', content: 'Cảm ơn vì bài viết rất hữu ích.' },

];

export default function ScreenInforProduct({ navigation }:any) {
    const [favourite, setFavourite] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 80 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity
                        style={[styles.icon_return]}
                        onPress={() => navigation.navigate("Main")}
                    >
                        <Feather name="arrow-left" style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={
                        {
                            position: 'relative',
                            height: 300
                        }
                    }>
                        <Image source={require('../Image/image_product_demo.png')} style={styles.image_product} />
                    </View>

                    <View style={styles.container_infor}>
                        <View style={styles.infoContent}>
                            <View>
                                <Text style={styles.name_product}>Mixed Salad BonBum</Text>
                                <View style={styles.container_start}>
                                    <Image source={require('../Image/icons_star.png')} style={styles.star_icon} />
                                    <Image source={require('../Image/icons_star.png')} style={styles.star_icon} />
                                    <Image source={require('../Image/icons_star.png')} style={styles.star_icon} />
                                    <Image source={require('../Image/icons_star.png')} style={styles.star_icon} />
                                </View>
                                <Text style={styles.price_product}>$ 23.000.000</Text>
                            </View>
                            <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                                {favourite ? (
                                    <Image source={require('../Image/icon_showFavourite.png')} style={styles.imageCart} />
                                ) : (
                                    <Image source={require('../Image/icon_unFavourite.png')} style={styles.imageCart} />
                                )}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerProduct_line}>
                            <View style={styles.lineProduct} />
                        </View>

                        <Text style={styles.des_product}>Về sản phẩm</Text>
                        <Text style={{ fontSize: 16, color: '#A6A1A1' }}>
                            Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú
                            Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú
                            Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú

                           
                        </Text>
                        <View style={styles.containerProduct_line_2}>
                            <View style={styles.lineProduct} />
                        </View>

                        <Text style={styles.des_comment}>Bình luận</Text>
                        {
                            comments.map(item => {
                                return <Comment name={
                                    item.name
                                } content={item.content} />
                            })
                        }

                    </View>
                </View>
            </ScrollView>

            <View style={[styles.container_add_product]}>
                <TouchableOpacity style={styles.btn_messenger}>
                    <Image source={require("../Image/icon_messenger.png")} style={styles.imageCart} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_cart}>
                    <Image source={require("../Image/cart.png")} style={styles.imageCart} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_sell}>
                    <Text style={styles.buyNow}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const Comment = ({ name, content }: any) => {
    return <View style={styles.containercomment}>
        <Image
            source={require('../Image/anh_dai_dien.png')}
            style={styles.avatar}
        />
        <View style={styles.contentContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    </View>
}