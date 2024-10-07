import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default class Component_Home {
    static Input_Screach = ({ input, event }: any) => {
        return (
            <View style={styles.container_sreach}>
                <Image source={require("../Image/search.png")} style={styles.image_search} />
                <TextInput placeholder="Nhập tên san phẩm cần tìm" value={input} onChangeText={(text) => event(text)} />
            </View>
        )
    }

    static Text_Title = ({ text }: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <Text style={styles.text_title}>{text}</Text>
                <Text style={[styles.text_title, { color: '#37c666' }]}>See All</Text>
            </View>
        )
    }

    static SelectCategoryProductVertical = ({ icon, text }: any) => {
        return (
            <View style={styles.container_select_vertical}>
                <Image source={icon} style={styles.icon_select_vertical} />
                <Text style={styles.text_select_vertical}>{text}</Text>
            </View>
        )
    }

    static ProductHozirontal = () => {
        return (
            <View style={styles.container_product_hozizontal}>
                <Image source={require("../Image/image_product_demo.png")} style={styles.image_product_hozizontal} />
                <Text numberOfLines={1} style={styles.name_product_hozizontal}>Mixed Salad BonBum</Text>
                <Text>Hambuger</Text>
                <Text style={styles.price_product_hozizontal}>$23.000</Text>
            </View>
        )
    }

    static SelectCategoryProuctHozizontal = ({ icon, text }: any) => {
        return (
            <View style={styles.container_select_hozirontal}>
                <Image source={icon} style={{ width: 20, height: 20 }} />
                <Text style={styles.text_select_hozirontal}>{text}</Text>
            </View>
        )
    }

    static ProductVertical = () => {
        return (
            <View style={styles.container_product_vertical}>
                <Image source={require("../Image/image_product_demo.png")} style={styles.image_product_vertical} />
                <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product_vertical}>Vegetarian Noodles</Text>
                        <Text>Hambuger</Text>
                    </View>
                    <Text style={styles.price_product_vertical}>$23.000</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    // Input_Screach
    container_sreach: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 10
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
        color: 'black'
    },

    // SelectCategoryProductVertical
    container_select_vertical: {
        width: '25%',
        alignItems: 'center'
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
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2fbf5f',
        borderRadius: 20,
        marginRight: 5,
        padding: 5,
        paddingHorizontal: 15,
    },
    text_select_hozirontal: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginLeft: 5
    },

    // ProductHozirontal
    container_product_hozizontal: {
        width: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        padding: 10
    },
    image_product_hozizontal: {
        width: 140,
        height: 140,
        alignItems: 'center',
        borderRadius: 10
    },
    name_product_hozizontal: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_hozizontal: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },

    // ProductVertical
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 15,
    },
    image_product_vertical: {
        width: 90,
        height: 90,
        borderRadius: 10
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_vertical: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    }
})