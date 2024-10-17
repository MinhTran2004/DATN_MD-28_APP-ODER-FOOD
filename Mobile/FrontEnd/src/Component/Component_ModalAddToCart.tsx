import React from 'react';
import { Modal, Text, View, Button } from 'react-native';
import styles from '../CSS/CSSModalAddedToCart';

const AddedToCartModal = ({ visible, onClose }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Sản phẩm đã được thêm vào giỏ hàng</Text>
        <Button title="Tiếp tục mua sắm" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default AddedToCartModal;
