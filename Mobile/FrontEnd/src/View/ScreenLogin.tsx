import { Image, Text, TouchableOpacity, View, ToastAndroid } from "react-native";
import styles from "../CSS/CSSLoginHome.js";
import ComponentLogin from "../Component/Component_Login.tsx";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import { ViewModelAccount } from "../ViewModel/VM_Account.ts";

export default function ScreenLogin({ navigation }: any) {
    const { account, password, setAccount, setPassword, checkNullInput } = ViewModelAccount();

    const a = () => {
        const b = checkNullInput("username", account, password, "phone");
        console.log(b);
    }

    const [isChecked, setIsChecked] = useState(true);

<<<<<<< HEAD
    const handleLogin = () => {
        if (account !== "admin" || password !== "1234") {
            ToastAndroid.showWithGravity("Vui lòng nhập đúng tài khoản và mật khẩu", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else {
            ToastAndroid.showWithGravity("Đăng nhập thành công", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            navigation.navigate('Main');
        }
    };
=======
>>>>>>> 91e1543 (Tao bang account + address + category + product cho backend)

    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Login To Your Account</Text>

            <View style={{ marginTop: 50, width: '100%' }}>
                <ComponentLogin.InputTextLogin placeholder={"Nhập tài khoản"} icon={require("../Image/account.png")} input={account} event={setAccount} />
                <ComponentLogin.InputTextLogin placeholder={"Nhập mật khẩu"} icon={require("../Image/password.png")} input={password} event={setPassword} />
            </View>

            <View style={styles.container_status_account}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                    />
                    <Text>Ghi nhớ đăng nhập </Text>
                </View>
                <TouchableOpacity>
                    <Text>Quên mật khẩu ?</Text>
                </TouchableOpacity>
            </View>

<<<<<<< HEAD
            <TouchableOpacity style={styles.layout_btn_login} onPress={handleLogin}>
=======
            {/* <TouchableOpacity style={styles.layout_btn_login} onPress={() => navigation.navigate('Main')}> */}
            <TouchableOpacity style={styles.layout_btn_login} onPress={() => a()}>
>>>>>>> 91e1543 (Tao bang account + address + category + product cho backend)
                <Text style={styles.text_btn_login}>Đăng Nhập</Text>
            </TouchableOpacity>

            <View style={styles.container_line}>
                <View style={styles.line} />
                <Text style={styles.text_line}>or continue with</Text>
                <View style={styles.line} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <ComponentLogin.LoginWidthProviders image={require("../Image/facebook.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/google.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/github.png")} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 70 }}>
                <Text style={{ fontSize: 18 }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={{ color: '#2eb55a', fontWeight: '500', fontSize: 18 }}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}