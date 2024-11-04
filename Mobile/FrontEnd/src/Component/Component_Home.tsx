import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Product } from '../model/Model_Product';
import { Category } from '../model/Model_Category';
import { ViewModelCart } from '../viewmodel/VM_Cart';

export default class ComponentHome {
    static Input_Screach = ({ input, event }: any) => {
        return (
            <View style={styles.container_sreach}>
                <Image source={require('../Image/search.png')} style={styles.image_search} />
                <TextInput placeholder="Nhập tên san phẩm cần tìm" value={input} onChangeText={(text) => event(text)} />
            </View>
        );
    };

    static Text_Title = ({ text }: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={styles.text_title}>{text}</Text>
                <Text style={[styles.text_title, { color: '#37c666' }]}>See All</Text>
            </View>
        );
    };

    static SelectCategoryProductVertical = ({ navigation, icon, text }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('CategoryProduct')} style={styles.container_select_vertical}>
                <Image source={icon} style={styles.icon_select_vertical} />
                <Text style={styles.text_select_vertical}>{text}</Text>
            </TouchableOpacity>
        );
    };

    static ProductHozirontal = ({ product, categories, navigation }: { product: Product, categories: Category[], navigation: any }) => {
        const [favourite, setFavourite] = useState(false);
        return (
            <TouchableOpacity style={styles.container_product_hozizontal} onPress={() => navigation.navigate('InforProduct', { product })}>
                <Image source={{ uri: product.image }} style={styles.image_product_hozizontal} />
                <Text numberOfLines={1} style={styles.name_product_hozizontal}>{product.name}</Text>
                <Text>{product.idCategory}</Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price_product_hozizontal}>${product.price}</Text>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        {favourite ?
                            (<Image source={require('../Image/icon_showFavourite.png')} style={{ width: 20, height: 20 }} />)
                            :
                            (<Image source={require('../Image/icon_unFavourite.png')} style={{ width: 20, height: 20 }} />)
                        }
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    static SelectCategoryProuctHozizontal = ({ icon, text }: any) => {
        return (
            <TouchableOpacity>
                <View style={styles.container_select_hozirontal}>
                    <Image source={icon} style={{ width: 20, height: 20 }} />
                    <Text style={styles.text_select_hozirontal}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    static ProductVertical = ({ product, categories, navigation }: { product: Product, categories: Category[], navigation: any }) => {
        const [favourite, setFavourite] = useState(false);
        return (
            <TouchableOpacity style={styles.container_product_vertical} onPress={() => navigation.navigate('InforProduct', { product })}>
                <Image source={{ uri: product.image }} style={styles.image_product_vertical} />
                <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product_vertical}>{product.name}</Text>
                        <Text>{product.idCategory}</Text>
                    </View>
                    <View style={{ width: '72%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.price_product_vertical}>${product.price}</Text>
                        <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                            {favourite ?
                                (<Image source={require('../Image/icon_showFavourite.png')} style={{ width: 20, height: 20 }} />)
                                :
                                (<Image source={require('../Image/icon_unFavourite.png')} style={{ width: 20, height: 20 }} />)
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

}

const styles = StyleSheet.create({
    // Input_Screach
    container_sreach: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 10,
    },
    image_search: {
        width: 25,
        height: 25,
    },

    // Text_Title
    text_title: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    // SelectCategoryProductVertical
    container_select_vertical: {
        width: '25%',
        alignItems: 'center',
    },
    icon_select_vertical: {
        width: 40,
        height: 40,
    },
    text_select_vertical: {
        fontWeight: '500',
        color: 'black',
        marginTop: 5,
    },

    // SelectCategoryProuctHozizontal
    container_select_hozirontal: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2fbf5f',
        borderRadius: 20,
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    text_select_hozirontal: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginLeft: 5,
    },

    // ProductHozirontal
    container_product_hozizontal: {
        width: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        padding: 10,
    },
    image_product_hozizontal: {
        width: 140,
        height: 140,
        alignItems: 'center',
        borderRadius: 10,
    },
    name_product_hozizontal: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    price_product_hozizontal: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5,
    },

    // ProductVertical
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 15,
    },
    image_product_vertical: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    price_product_vertical: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
