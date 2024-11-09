import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import styles from "../css/CSSLoginHome.js";
import ComponentLogin from "../component/Component_Login.tsx";
import CheckBox from "@react-native-community/checkbox";
import { ViewModelAccount } from "../ViewModel/VM_Account.ts";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function ScreenLogin({ navigation }: any) {
    const ViewModel = ViewModelAccount(navigation);

    return (
        <View style={styles.main}>
            <Image source={require("../Image/logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Đăng Nhập</Text>

            <View style={{ marginTop: 50, width: '100%' }}>
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập tài khoản"} 
                    icon={require("../Image/account.png")} 
                    input={ViewModel.account} 
                    event={ViewModel.setAccount} 
                />
                <ComponentLogin.InputTextLogin 
                    isPasssword 
                    placeholder={"Nhập mật khẩu"} 
                    icon={require("../Image/password.png")} 
                    input={ViewModel.password} 
                    event={ViewModel.setPassword} 
                />
            </View>

            <View style={styles.container_status_account}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        value={ViewModel.isChecked}
                        onValueChange={ViewModel.setIsChecked}
                    />
                    <Text>Ghi nhớ đăng nhập</Text>
                </View>
                <TouchableOpacity>
                    <Text>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.layout_btn_login} onPress={ViewModel.getAccountByAccountAndPassword}>
                <Text style={styles.text_btn_login}>Đăng Nhập</Text>
            </TouchableOpacity>

            <View style={styles.container_line}>
                <View style={styles.line} />
                <Text style={styles.text_line}>Or</Text>
                <View style={styles.line} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <ComponentLogin.LoginWidthProviders image={require("../Image/facebook.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/google.png")} />
                <ComponentLogin.LoginWidthProviders image={require("../Image/github.png")} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                <Text style={{ fontSize: 18 }}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
