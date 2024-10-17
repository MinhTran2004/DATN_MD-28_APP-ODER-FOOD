import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenDiscountDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.discountBox}>
        <Text style={styles.discountTitle}>Giảm 5%</Text>
        <Text style={{ marginBottom: 14 }}>
          Đối với các đơn hàng có giá trị trên 50k
        </Text>
        <View style={styles.separator} />
        <Text style={styles.expiryText}>Hết hạn sau 15 giờ</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.sectionTitle}>Hạn sử dụng mã</Text>
        <Text>15 Th10 2024 15:30 - 15 Th10 2024 15:30</Text>
        <Text style={styles.sectionTitle}>Ưu đãi</Text>
        <Text>
          Lượt sử dụng có hạn. Nhanh tay kẻo lỡ! Giảm 5% đơn tối thiểu 50k
        </Text>
        <Text style={styles.sectionTitle}>Áp dụng cho sản phẩm</Text>
        <Text>
          Chỉ áp dụng trên app và sản phẩm hoặc một số người dùng tham gia
          chương trình khuyến mãi
        </Text>
        <Text style={styles.sectionTitle}>Thanh toán</Text>
        <Text>Tất cả các hình thức thanh toán</Text>
        <Text style={styles.sectionTitle}>Thiết bị</Text>
        <Text>Android, IOS</Text>
        <Text style={styles.sectionTitle}>Chi tiết</Text>
        <Text>
          Mã giảm 5% cho đơn hàng tối thiểu 50k trên ứng dụng. Áp dụng cho tất
          cả mặt hàng trong ứng dụng. HSD 15:30 ngày 15-10-2024. Số lượng có
          hạn.
        </Text>
        <Text style={styles.note}>
          *Lưu ý: Voucher sẽ không được hoàn lại sau khi đã hết hiệu lực
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  discountBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 17,
    backgroundColor: '#fce4e4',
    marginBottom: 10,
  },
  separator: {
    height: 1, // Chiều cao của thanh kẻ ngang
    backgroundColor: '#cccccc', // Màu của thanh kẻ ngang
    marginVertical: 6, // Khoảng cách trên và dưới
  },
  detailBox: {
    paddingHorizontal: 17,
  },
  discountTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  expiryText: {
    color: 'red',
    marginTop: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  note: {
    color: 'red',
    marginTop: 10,
  },
});

export default ScreenDiscountDetail;
