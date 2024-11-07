import { Image, ScrollView, Text, View } from "react-native";
import styles from "../CSS/CSSProfile";
import Component_Profile from "../Component/Component_Profile";
export default function ScreenProfile({navigation}:any) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* header */}
            <View style={styles.container_header}>
                <Image source={{uri: "https://www.thepoetmagazine.org/wp-content/uploads/2024/06/meme-meo-suyt.jpg"}} style={{ width: 100, height: 100, borderRadius: 90 }} />
                <Text style={styles.name_profile}>Nguyễn Công Thưởng</Text>
                <Text style={{fontSize: 16, fontWeight: 500,}}>Thành viên</Text>
            </View>

            {/* body */}
            <View>
                <Text style={{marginBottom: 5, fontSize: 16, fontWeight: 500, marginLeft: 5}}>Tài khoản</Text>
                <Component_Profile.Item_Profile name={"Đăng kí cửa hàng"} icon={require("../Image/ic_home.png")} navigation={navigation} screen={'StoreRegistrantion'}/>
                <Component_Profile.Item_Profile name={"Thông tin cá nhân"} icon={require("../Image/account.png")} navigation={navigation} screen={'Account'}/>
                <Component_Profile.Item_Profile name={"Địa chỉ"} icon={require("../Image/ic_address.png")} navigation={navigation} screen={'Address'}/>
                <Component_Profile.Item_Profile name={"Đổi mật khẩu"} icon={require("../Image/password.png")} navigation={navigation} screen={'ChangePassword'}/>
                <Component_Profile.Item_Profile name={"Sản phẩm yêu thích"} icon={require("../Image/ic_heart.png")} navigation={navigation} screen={'Favourite'}/>
                <Component_Profile.Item_Profile name={"Phiếu giảm giá"} icon={require("../Image/ic_sale.png")} navigation={navigation} screen={'Discount'}/>
                <Text style={{marginBottom: 5, marginTop: 10, fontSize: 16, fontWeight: 500, marginLeft: 5}}>Ứng dụng</Text>
                <Component_Profile.Item_Profile name={"Bật thông báo"} icon={require("../Image/icon_notification.png")} mode={true}/>
                <Component_Profile.Item_Profile name={"Chế độ tối"} icon={require("../Image/icon_light.png")} mode={true}/>
                <Text style={{marginBottom: 5, marginTop: 10, fontSize: 16, fontWeight: 500, marginLeft: 5}}>Cài đặt</Text>
                <Component_Profile.Item_Profile name={"Chính sách và quyền riêng tư"} icon={require("../Image/icon_book.png")} navigation={navigation} screen={'ChangePassword'}/>
                <Component_Profile.Item_Profile name={"Đăng xuất"} icon={require("../Image/icon_logout.png")} navigation={navigation} screen={'Login'}/>
            </View>
        </ScrollView>
    )
}