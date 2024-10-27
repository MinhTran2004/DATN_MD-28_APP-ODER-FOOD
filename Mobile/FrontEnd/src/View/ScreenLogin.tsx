import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import axios from "axios"; // Import Axios
import styles from "../CSS/CSSLoginHome.js";
import ComponentLogin from "../Component/Component_Login.tsx";
import CheckBox from "@react-native-community/checkbox";
import { ViewModelAccount } from "../ViewModel/VM_Account.ts";

export default function ScreenLogin({ navigation }: any) {
    const { account, password, setAccount, setPassword } = ViewModelAccount();
    const [isChecked, setIsChecked] = useState(true);

    const validateInputs = () => {
        // Check if fields are empty
        if (!account || !password) {
            Alert.alert("Lỗi", "Tài khoản và mật khẩu không được để trống.");
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        // Validate inputs before proceeding
        if (!validateInputs()) return;

        try {
            // Make API call to login
            const response = await axios.post('http://192.168.0.104:5000/account/login', {
                username: account,
                password: password,
            });

            // Handle successful login
            Alert.alert("Thành công", "Đăng nhập thành công");
            navigation.navigate('Main'); // Navigate to the main screen after successful login

        } catch (error:any) {
            // Handle errors
            if (error?.response) {
                Alert.alert("Lỗi", error?.response?.data?.message); // Error from server
            } else {
                Alert.alert("Lỗi", "Đã xảy ra lỗi trong quá trình đăng nhập."); // Network error or other error
            }
        }
    };

    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Đăng Nhập Vào Tài Khoản Của Bạn</Text>

            <View style={{ marginTop: 50, width: '100%' }}>
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập tài khoản"} 
                    icon={require("../Image/account.png")} 
                    input={account} 
                    event={setAccount} 
                />
                <ComponentLogin.InputTextLogin 
                    isPasssword 
                    placeholder={"Nhập mật khẩu"} 
                    icon={require("../Image/password.png")} 
                    input={password} 
                    event={setPassword} 
                />
            </View>

            <View style={styles.container_status_account}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                    />
                    <Text>Ghi nhớ đăng nhập</Text>
                </View>
                <TouchableOpacity>
                    <Text>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.layout_btn_login} onPress={handleLogin}>
                <Text style={styles.text_btn_login}>Đăng Nhập</Text>
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

            <View style={{ flexDirection: 'row', marginTop: 70 }}>
                <Text style={{ fontSize: 18 }}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={{ color: '#2eb55a', fontWeight: '500', fontSize: 18 }}> Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
