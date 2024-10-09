import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../CSS/CSSLoginHome";
import ComponentLogin from "../Component/Component_Login";
import { useState } from "react";

export default function ScreenRegister({navigation}:any) {
    const [username, setUsername] = useState("");
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Create New Account</Text>

            <View style={{width: '100%', marginTop: 20}}>
                <ComponentLogin.InputTextLogin placeholder={"Nhập tên người dùng"} icon={require("../Image/account.png")} input={username} event={setUsername} />
                <ComponentLogin.InputTextLogin placeholder={"Nhập tài khoản"} icon={require("../Image/mail.png")} input={account} event={setAccount} />
                <ComponentLogin.InputTextLogin placeholder={"Nhập mật khẩu"} icon={require("../Image/password.png")} input={password} event={setPassword} />
                <ComponentLogin.InputTextLogin placeholder={"Nhập số điẹn thoại"} icon={require("../Image/phone.png")} input={phone} event={setPhone} />
            </View>
            
            <TouchableOpacity style={styles.layout_btn_login} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text_btn_login}>Đăng kí</Text>
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

        </View>
    )
}