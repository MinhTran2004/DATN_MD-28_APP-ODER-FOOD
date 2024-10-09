import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../CSS/CSSLoginHome.js";
import ComponentLogin from "../Component/Component_Login.tsx";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

export default function ScreenLogin({ navigation }: any) {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(true);

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

            <TouchableOpacity style={styles.layout_btn_login} onPress={() => navigation.navigate('Main')}>
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