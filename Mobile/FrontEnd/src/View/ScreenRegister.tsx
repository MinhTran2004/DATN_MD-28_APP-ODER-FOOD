import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import axios from "axios"; // Import Axios
import styles from "../CSS/CSSLoginHome";
import ComponentLogin from "../Component/Component_Login";

export default function ScreenRegister({ navigation }: any) {
    const [username, setUsername] = useState("");
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return regex.test(email);
    };

    const handleRegister = async () => {
        // Validate inputs
        if (!username || !account || !password || !phone) {
            Alert.alert("Lỗi", "Tất cả các trường đều phải được điền.");
            return;
        }

        if (!validateEmail(account)) {
            Alert.alert("Lỗi", "Vui lòng nhập một địa chỉ email hợp lệ.");
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.104:5000/account/register', {
                username,
                account,
                password,
                phone,
                role: 'user', // Default role
                status: 'active' // Default status
            });
            Alert.alert("Thành công", response.data.message);
            navigation.navigate('Login'); // Navigate to Login screen after successful registration
        } catch (error:any) {
            if (error?.response) {
                Alert.alert("Lỗi", error?.response?.data?.message);
            } else {
                Alert.alert("Lỗi", "Không có kết nối với server");
            }
        }
    };

    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Tạo tài khoản mới</Text>

            <View style={{ width: '100%', marginTop: 20 }}>
                <ComponentLogin.InputTextLogin
                    placeholder={"Nhập tên người dùng"}
                    icon={require("../Image/account.png")}
                    input={username}
                    event={setUsername}
                />
                <ComponentLogin.InputTextLogin
                    placeholder={"Nhập tài khoản (email)"}
                    icon={require("../Image/mail.png")}
                    input={account}
                    event={setAccount}
                />
                <ComponentLogin.InputTextLogin
                    placeholder={"Nhập mật khẩu"}
                    isPasssword
                    icon={require("../Image/password.png")}
                    input={password}
                    event={setPassword}
                />
                <ComponentLogin.InputTextLogin
                    placeholder={"Nhập số điện thoại"}
                    icon={require("../Image/phone.png")}
                    input={phone}
                    event={setPhone}
                />
            </View>

            <TouchableOpacity style={styles.layout_btn_login} onPress={handleRegister}>
                <Text style={styles.text_btn_login}>Đăng kí</Text>
            </TouchableOpacity>

            <View style={styles.container_line}>
                <View style={styles.line} />
                <Text style={styles.text_line}>hoặc tiếp tục với</Text>
                <View style={styles.line} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <ComponentLogin.LoginWidthProviders image={require("../Image/facebook.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/google.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/github.png")} />
            </View>
        </View>
    );
}
