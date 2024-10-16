import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const DiscountScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Mã giảm giá</Text>
      </View> */}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("all")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "all" && styles.activeTabText,
            ]}
          >
            Tất cả
          </Text>
          {selectedTab === "all" && <View style={styles.activeTabLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("store")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "store" && styles.activeTabText,
            ]}
          >
            Cửa hàng
          </Text>
          {selectedTab === "store" && <View style={styles.activeTabLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedTab("shipping")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "shipping" && styles.activeTabText,
            ]}
          >
            Vận chuyển
          </Text>
          {selectedTab === "shipping" && <View style={styles.activeTabLine} />}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.discountContainer}>
        <TouchableOpacity
          style={styles.discountBox}
          onPress={() => navigation.navigate("DiscountDetail")}
        >
          <Text style={styles.discountTitle}>Giảm 5%</Text>
          <Text>Đối với các đơn hàng có giá trị trên 50k</Text>
          <Text style={styles.expiryText}>Hết hạn sau 15 giờ</Text>
          <Text>Áp dụng cho tất cả các sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.discountBox}
          onPress={() => navigation.navigate("DiscountDetail")}
        >
          <Text style={styles.discountTitle}>Giảm 5%</Text>
          <Text>Đối với các đơn hàng có giá trị trên 50k</Text>
          <Text style={styles.expiryText}>Hết hạn sau 15 giờ</Text>
          <Text>Áp dụng cho tất cả các sản phẩm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 18,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTabText: {
    fontWeight: "bold",
  },
  activeTabLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    marginTop: 5,
  },
  discountContainer: {
    marginTop: 10,
  },
  discountBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#fce4e4",
    marginBottom: 10,
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  expiryText: {
    color: "red",
    marginTop: 5,
  },
});

export default DiscountScreen;
