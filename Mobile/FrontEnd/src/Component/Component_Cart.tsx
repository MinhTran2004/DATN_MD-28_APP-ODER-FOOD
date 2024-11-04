import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../model/Model_Product';
import { ViewModelCart } from '../viewmodel/VM_Cart';
import { Swipeable } from 'react-native-gesture-handler';
import { useState } from 'react';
import { deleteProduct } from '../redux/slice/cartSlice';
import { useAppDispatch } from '../hooks/hooks';

export default class Component_cart {
    static CartVertical = ({ product, quantity, navigation }: { product: Product, quantity: number, navigation: any }) => {
        const { addProductToCart, removeProductFromCart } = ViewModelCart(navigation);
        const [isDialogVisible, setDialogVisible] = useState(false); // State cho Dialog
        const dispatch = useAppDispatch();
        const rejectAction = () => {
            setDialogVisible(false);
        };

        const acceptAction = () => {
            dispatch(deleteProduct(product));
            setDialogVisible(false);
        };


        const renderRightActions = (progress, dragX) => {
            const scale = dragX.interpolate({
                inputRange: [-80, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            });

            return (
                <TouchableOpacity onPress={() => setDialogVisible(true)} style={styles.deleteButton}>
                    <Animated.Image source={require('../Image/delete.png')} />
                </TouchableOpacity>
            );
        };

        return (
            <Swipeable renderRightActions={renderRightActions}>
                <View style={styles.container_product_vertical}>
                    <Image source={{ uri: product.image }} style={styles.image_product_vertical} />
                    <View style={{ width: '77%', marginLeft: 10, justifyContent: 'space-between' }}>
                        <View style={{ width: '80%' }}>
                            <Text style={styles.name_product_vertical}>{product.name}</Text>
                            <Text>{product.idCategory}</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Text style={styles.price_product_vertical}>${product.price * quantity}</Text>

                            <View style={styles.container_operation}>
                                <TouchableOpacity onPress={() => addProductToCart(undefined, product, 1)}>
                                    <MaterialIcons name="add" style={styles.btn_operation} />
                                </TouchableOpacity>
                                <Text style={styles.text_quantity}>{quantity}</Text>
                                <TouchableOpacity onPress={() => removeProductFromCart(undefined, product, 1)}>
                                    <MaterialIcons name="remove" style={styles.btn_operation} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Dialog Xác nhận */}
                <Modal
                    transparent={true}
                    visible={isDialogVisible}
                    animationType="fade"
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.dialogContainer}>
                            {/* Hiển thị nội dung thông báo theo từng trường hợp */}
                            <Text style={styles.dialogMessage}>
                                {'Bạn có chắc chắn muốn xóa sản phẩm này?'}
                            </Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonAccept} onPress={acceptAction}>
                                    <Text style={styles.buttonAcceptText}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonReject} onPress={rejectAction}>
                                    <Text>No</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </Modal>
            </Swipeable>
        );
    };
}

const styles = StyleSheet.create({
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
        width: '23%',
        height: 90,
        borderRadius: 10,
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    price_product_vertical: {
        width: 150,
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5,
    },
    container_operation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_operation: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        padding: 5,
    },
    text_quantity: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 8,
    },
    deleteButton: {
        backgroundColor: '#FDD3D3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dialogContainer: {
        width: 250,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    dialogMessage: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonAccept: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4AB1FB',
        width: '45%',/* Rectangle 64 */
        borderRadius: 10,
        borderColor: '#4AB1FB',
        borderWidth: 1,

    },
    buttonReject: {
        backgroundColor: '#4AB1FB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        borderRadius: 10,
        borderColor: '#4AB1FB',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonAcceptText: {
        color: '#4AB1FB',
    },
});
