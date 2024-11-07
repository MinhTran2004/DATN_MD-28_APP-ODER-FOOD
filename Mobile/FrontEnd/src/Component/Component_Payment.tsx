import { Image, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Component_Payment {
    static ProductBycart = () => {
        return (
            <View style={styles.container_product_vertical}>
                <Image source={require("../Image/image_product_demo.png")} style={styles.image_product_vertical} />
                <View style={{ width: '77%', marginLeft: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.name_product_vertical}>Vegetarian Noodles</Text>
                        <Text style={styles.description_product}>Hambuger</Text>
                    </View>
                    <View style={styles.container_price_quantity}>
                        <Text style={styles.price_product_vertical}>$23.000</Text>
                        <Text style={styles.quantity_product}>x6</Text>
                    </View>
                </View>
            </View>
        )
    }

    static MethodPayment = ({ icon, name, text }: any) => {
        return (
            <View style={styles.container_method_payment}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto name={icon} style={styles.icon} />
                    <Text style={styles.method_name}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.method_text}>{text}</Text>
                    <AntDesign name="right" style={styles.arrow_icon} />
                </View>
            </View>
        )
    }

    static DetailsPayment = ({ text, price }: any) => {
        return (
            <View style={styles.container_detail_payment}>
                <Text style={styles.text_detail}>{text}</Text>
                <Text style={styles.price_detail}>${price}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        borderTopWidth: 1,
        borderColor: '#e4e4e4',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
        marginBottom: 10,
    },
    image_product_vertical: {
        width: '23%',
        height: 90,
        borderRadius: 10
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    description_product: {
        fontSize: 14,
        color: '#7d7d7d'
    },
    price_product_vertical: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
    },
    quantity_product: {
        fontSize: 20,
        color: '#42bb6a',
    },
    container_price_quantity: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    container_method_payment: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4',
    },
    icon: {
        fontSize: 23,
        color: '#1bac4b',
    },
    method_name: {
        marginLeft: 10,
        fontSize: 15,
    },
    method_text: {
        marginLeft: 10,
        fontSize: 15,
    },
    arrow_icon: {
        fontSize: 22,
        color: '#1bac4b',
    },
    container_detail_payment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    text_detail: {
        fontSize: 17,
    },
    price_detail: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
