import { Alert } from "react-native";
import axios from "axios"; // Import Axios

const apiUrl = 'http://10.0.2.2:5000/account';

const validateInputs = (account: string, password: string, username?: string) => {
    const specialCharPattern = /[^a-zA-Z0-9]/;
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;
      if (username && specialCharPattern.test(username)) {
        Alert.alert("Lỗi", "Tên người dùng không được chứa ký tự đặc biệt.");
        return false;
    }
    if (!account || !password) {
        Alert.alert("Lỗi", "Tài khoản và mật khẩu không được để trống.");
        return false;
    } if (password.length < 8 || password.length > 20) {
        Alert.alert("Lỗi", "Mật khẩu phải có độ dài từ 8 đến 20 ký tự.");
        return false;
    }
    if (!uppercasePattern.test(password)) {
        Alert.alert("Lỗi", "Mật khẩu phải chứa ít nhất một chữ cái in hoa.");
        return false;
    }

    if (!numberPattern.test(password)) {
        Alert.alert("Lỗi", "Mật khẩu phải chứa ít nhất một chữ số.");
        return false;
    }
    return true;
};


const handleLogin = async (account: string, password: string, navigation: any) => {
    if (!validateInputs(account, password)) return;

    try {
        const response = await axios.post(`${apiUrl}/login`, {
            account, 
            password,
        });

        Alert.alert("Thành công", "Đăng nhập thành công");
        navigation.navigate('Main'); 
    } catch (error: any) {
        if (error?.response) {
            Alert.alert("Lỗi", error?.response?.data?.message);
        } else {
            Alert.alert("Lỗi", "Đã xảy ra lỗi trong quá trình đăng nhập.");
        }
    }
};


const handleRegister = async (username: string, account: string, password: string, phone: string, role: string, status: string, navigation: any) => {
    if (!validateInputs(account, password, username) || !username || !phone || !role || !status) {
        Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin.");
        return;
    }

    try {
        const response = await axios.post(`${apiUrl}/register`, {
            username,
            account, 
            password,
            phone,
            role,
            status,
        });

        Alert.alert("Thành công", "Tài khoản đã được tạo thành công");
        navigation.navigate('Main');
    } catch (error: any) {
        if (error?.response) {
            Alert.alert("Lỗi", error?.response?.data?.message);
        } else {
            Alert.alert("Lỗi", "Đã xảy ra lỗi trong quá trình đăng ký.");
        }
    }
};

export { validateInputs, handleLogin, handleRegister };
