import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../CSS/CSSCart';
import ComponentCart from '../Component/Component_Cart';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import {ViewModelWishlist} from '../ViewModel/VM_Wishlist';
import { removeMessage } from '../redux/slice/wishlistSlice';

export default function ScreenCart({navigation}: any) {
  const [isDialogDisplayed, setIsDialogDisplayed] = useState(false);
  const {wishlist, message} = ViewModelWishlist(navigation);
  const dispatch = useAppDispatch();

  useEffect(() => {
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
      <ScrollView style={{padding: 10}}>
        {/* header */}
        <View style={styles.container_header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name="arrow-left" style={{fontSize: 30}} />
          </TouchableOpacity>
          <Text style={styles.text_title}>Giỏ hàng</Text>
        </View>

        {/* body */}
        {wishlist?.wishlistItems.map(({productId, quantity}) => (
          <ComponentCart.CartVertical
            key={productId._id}
            product={productId}
            quantity={quantity}
            navigation={navigation}
          />
        ))}
      </ScrollView>

      {/* footer */}
      <View style={styles.container_footer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text_total}>Tổng tiền</Text>
          <Text style={styles.text_total}>
            $
            {wishlist?.wishlistItems.reduce((acc, {productId, quantity}) => {
              return acc + productId.price * quantity;
            }, 0) ?? '$0'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btn_payment}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.text_payment}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
      {/* Modal */}
      <Modal
        transparent={true}
        visible={isDialogDisplayed}
        animationType="fade">
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
