import { Image, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../css/CSSInforProduct';
import { Text } from 'react-native-paper';
import { useState } from 'react';
import { Product } from '../model/Model_Product';

export default function ScreenInforProduct({ navigation, route }: { navigation: any, route: any }) {
    const { product } = route.params as { product: Product };
    //TODO: Save Favourite to DB
    const [favourite, setFavourite] = useState(false);
    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={styles.icon_return} onPress={() => navigation.navigate('Main')}>
                <Feather name="arrow-left" style={{ fontSize: 30, color: 'white' }} />
            </TouchableOpacity>

            <Image source={{ uri: product.image }} style={styles.image_product} />
            <View style={styles.container_infor}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product}>{product.name}</Text>
                        <Text style={styles.price_product}>{product.price}</Text>
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
                <Text style={{ fontSize: 17 }}>{product.describe}</Text>

            </View>

            <View style={styles.container_add_product}>
                <TouchableOpacity style={styles.btn_messenger}>
                    <Image source={require('../Image/icon_messenger.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_cart}>
                    <Image source={require('../Image/cart.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_sell}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
