import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../css/CSSCart';
import ComponentCart from '../component/Component_Cart';
import { ViewModelAccount } from '../viewmodel/VM_Account';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ViewModelCart } from '../viewmodel/VM_Cart';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import { removeMessage } from '../redux/slice/cartSlice';

export default function ScreenCart({ navigation }: any) {
    const products = useAppSelector(state => state.cart.cart.products);
    const message = useAppSelector(state => state.cart.message);
    const [isDialogDisplayed, setIsDialogDisplayed] = useState(false);
    // to trigger load cart data useEffect
    const { } = ViewModelCart(navigation);
    const { id } = ViewModelAccount(navigation);
    const dispatch = useAppDispatch();

    useEffect((
    ) => {
        if (message !== undefined) {
            setIsDialogDisplayed(true);
            setTimeout(() => {
                dispatch(removeMessage());
                setIsDialogDisplayed(false);
            }, 2000);
        }
    }, [dispatch, message]);

    return (
        <View style={styles.main}>

            <ScrollView style={{ padding: 10 }}>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="arrow-left" style={{ fontSize: 30 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* body */}
                {
                    products?.map(({ productId, quantity }) => (
                        <ComponentCart.CartVertical key={productId._id} product={productId} quantity={quantity} navigation={navigation} />)
                    )
                }
            </ScrollView>

            {/* footer */}
            <View style={styles.container_footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text_total}>Tổng tiền</Text>
                    <Text style={styles.text_total}>${products?.reduce((acc, { productId, quantity }) => {
                        return acc + productId.price * quantity;
                    }, 0) ?? '$0'}</Text>
                </View>

                <TouchableOpacity style={styles.btn_payment} onPress={() => navigation.navigate('Payment')}>
                    <Text style={styles.text_payment}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
            {/* Modal */}
            <Modal
                transparent={true}
                visible={isDialogDisplayed}
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.dialogContainer}>
                        <MaterialIcons name="check-circle" size={50} color="green" />
                        {/* Hiển thị nội dung thông báo theo từng trường hợp */}
                        <Text style={styles.dialogMessage}>
                            {'Xóa sản phẩm thành công!'}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
