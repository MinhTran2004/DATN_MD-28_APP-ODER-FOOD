import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../CSS/CSSCart";


export default function ScreenAccount({ navigation }: any) {
  const [name, setName] = useState("Nguyễn Bá Thịnh");
  const [email, setEmail] = useState("Thinh@gmail.com");
  const [phone, setPhone] = useState("0987654321");
  const [bio, setBio] = useState("Tôi yêu đồ ăn nhanh");

  return (
    <View style={styles.container}>

      <View style={style.container_header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" style={{ fontSize: 24, color: '#000' }} />
        </TouchableOpacity>
        <Text style={style.text_title}>Thông tin cá nhân</Text>
      </View>

      <View style={{ padding: 10, flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Image
            source={{ uri: "https://www.thepoetmagazine.org/wp-content/uploads/2024/06/meme-meo-suyt.jpg" }}
            style={styles.profileImage}
          />

          <Text style={styles.label}>Họ và Tên</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Số Điện Thoại</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            value={bio}
            onChangeText={setBio}
            multiline={true}
            numberOfLines={6}
          />
        </View>

        <TouchableOpacity style={styles.btnsave}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: '#fff' }}>Lưu</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 90,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#2d2d2d'
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#aaa',
    borderWidth: 0.5,
    borderColor: '#aaa'
  },
  btnsave: {
    backgroundColor: '#500000',
    padding: 15,
    borderRadius: 15,
  }

});
