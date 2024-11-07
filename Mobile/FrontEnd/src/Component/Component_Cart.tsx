import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class ComponentCart {
    static CartVertical = () => {
        return (
            <View style={styles.container_product_vertical}>
                <Image source={require("../Image/image_product_demo.png")} style={styles.image_product_vertical} />
                <View style={styles.product_info}>
                    <View style={styles.product_name}>
                        <Text style={styles.name_product_vertical}>Vegetarian Noodles</Text>
                        <Text style={styles.subtext}>Hamburger</Text>
                    </View>
                    <View style={styles.price_operation}>
                        <Text style={styles.price_product_vertical}>$23.00</Text>
                        <View style={styles.container_operation}>
                            <TouchableOpacity>
                                <MaterialIcons name="remove" style={styles.btn_operation} />
                            </TouchableOpacity>
                            <Text style={styles.text_quantity}>1</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="add" style={styles.btn_operation} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 10,
        padding: 15,
        alignItems: 'center',
    },
    image_product_vertical: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    product_info: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    product_name: {
        width: '80%',
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    subtext: {
        fontSize: 14,
        color: 'grey',
    },
    price_operation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price_product_vertical: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
    },
    container_operation: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 5,
    },
    btn_operation: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 8,
    },
    text_quantity: {
        fontSize: 16,
        color: 'black',
        marginHorizontal: 8,
    },
});
