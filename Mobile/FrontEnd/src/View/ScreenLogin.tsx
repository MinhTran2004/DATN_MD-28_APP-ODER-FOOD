import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import styles from "../CSS/CSSLoginHome.js";
import ComponentLogin from "../Component/Component_Login.tsx";
import CheckBox from "@react-native-community/checkbox";
import { ViewModelAccount } from "../ViewModel/VM_Account.ts";
import { handleLogin } from "../service/Account.Service.ts";



export default function ScreenLogin({ navigation }: any) {
    const { account, password, setAccount, setPassword } = ViewModelAccount();
    const [isChecked, setIsChecked] = useState(true);




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

            <TouchableOpacity style={styles.layout_btn_login} onPress={()=>{
                handleLogin(account,password,navigation)
            }
            }>
                <Text style={styles.text_btn_login}>Đăng Nhập</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 70 }}>
                <Text style={{ fontSize: 18 }}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={{ color: '#2eb55a', fontWeight: '500', fontSize: 18 }}> Đăng ký</Text>
                </TouchableOpacity>
            </View>
            

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
