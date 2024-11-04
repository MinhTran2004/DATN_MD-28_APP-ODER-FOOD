import { Image, ScrollView, Text, View } from 'react-native';
import styles from '../CSS/CSSProfile';
import Component_Profile from '../Component/Component_Profile';
export default function ScreenProfile({navigation}:any) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* header */}
            <View style={styles.container_header}>
                <Image source={require('../Image/user.png')} style={{ width: 70, height: 70, borderRadius: 50 }} />
                <Text style={styles.name_profile}>Trần Công Minh</Text>
                <Text style={{fontSize: 16}}>Thành viên</Text>
            </View>

            {/* body */}
            <View style={{ padding: 10 }}>
                <Text style={{marginTop: 10}}>Tài khoản</Text>
                <Component_Profile.Item_Profile name={'Đăng kí cửa hàng'} icon={require('../Image/icon_home.png')} navigation={navigation} screen={'StoreRegistrantion'}/>
                <Component_Profile.Item_Profile name={'Thông tin tài khoản'} icon={require('../Image/account.png')} navigation={navigation} screen={'Account'}/>
                <Component_Profile.Item_Profile name={'Địa chỉ'} icon={require('../Image/icon_location.png')} navigation={navigation} screen={'Address'}/>
                <Component_Profile.Item_Profile name={'Đổi mật khẩu'} icon={require('../Image/password.png')} navigation={navigation} screen={'ChangePassword'}/>
                <Component_Profile.Item_Profile name={'Sản phẩm yêu thích'} icon={require('../Image/icon_showFavourite.png')} navigation={navigation} screen={'Favourite'}/>
                <Text style={{marginTop: 10}}>Ứng dụng</Text>
                <Component_Profile.Item_Profile name={'Bật thông báo'} icon={require('../Image/icon_notification.png')} mode={true}/>
                <Component_Profile.Item_Profile name={'Chế độ tối'} icon={require('../Image/icon_light.png')} mode={true}/>
                <Text style={{marginTop: 10}}>Cài đặt</Text>
                <Component_Profile.Item_Profile name={'Chính sách và quyền riêng tư'} icon={require('../Image/icon_book.png')} navigation={navigation} screen={'ChangePassword'}/>
                <Component_Profile.Item_Profile name={'Đăng xuất'} icon={require('../Image/icon_logout.png')} navigation={navigation} screen={'Login'}/>
            </View>
        </ScrollView>
    );
}
