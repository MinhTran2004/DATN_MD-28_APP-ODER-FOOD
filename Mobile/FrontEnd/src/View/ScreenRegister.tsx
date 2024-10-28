import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../CSS/CSSLoginHome";
import ComponentLogin from "../Component/Component_Login";
import { useState } from "react";
import { ViewModelAccount } from "../ViewModel/VM_Account";
import { handleRegister } from "../service/Account.Service"; 

export default function ScreenRegister({ navigation }: any) {
    const { username, setUsername, account, setAccount, password, setPassword, phone, setPhone } = ViewModelAccount();
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
                    placeholder={"Nhập tài khoản"} 
                    icon={require("../Image/mail.png")} 
                    input={account} 
                    event={setAccount} 
                />
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập mật khẩu"} 
                    icon={require("../Image/password.png")} 
                    input={password} 
                    event={setPassword} 
                    secureTextEntry={true} // Use secure text entry for password input
                />
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập số điện thoại"} 
                    icon={require("../Image/phone.png")} 
                    input={phone} 
                    event={setPhone} 
                />
            </View>
            
            <TouchableOpacity style={styles.layout_btn_login} onPress={()=>{
                    handleRegister(username, account, password, phone, "user", "active", navigation);

            }}>
                <Text style={styles.text_btn_login}>Đăng ký</Text>
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
