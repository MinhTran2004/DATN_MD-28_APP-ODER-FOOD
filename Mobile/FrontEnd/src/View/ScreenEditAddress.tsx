import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ComponentEditAddress from "../Component/Component_EditAddress";
import { useState } from "react";

export default function ScreenEditAddress({ navigation }: any) {
    const [isSwitch, setIsSwitch] = useState(false);
    return (
        <View style={styles.main}>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 28 }} />
                </TouchableOpacity>
                <Text style={styles.text_appbar}>Thay đổi địa chỉ</Text>
            </View>

            {/* contact */}
            <Text style={styles.text_title}>Liên hệ</Text>
            <TextInput style={[styles.inputTextContact, { marginBottom: 10 }]} placeholder="Nhập tên của bạn" />
            <TextInput style={styles.inputTextContact} placeholder="Nhập số điện thoại" />

            <Text style={styles.text_title}>Địa chỉ</Text>
            {/* Select City */}
            <ComponentEditAddress.SelectAddress name={"Chọn thành phố"} />
            <ComponentEditAddress.SelectAddress name={"Chọn quận"} />
            <ComponentEditAddress.SelectAddress name={"Chọn phường"} />
            <TextInput style={[styles.inputTextContact, { marginTop: 0 }]} placeholder="Nhập đia chỉ cụ thể" />

            {/* mac dinh */}
            <Text style={styles.text_title}>Cài đặt</Text>

            <View style={styles.container_switch}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Đặt làm mặc định</Text>
                <Switch value={isSwitch} onChange={() => setIsSwitch(!isSwitch)} />
            </View>

            <TouchableOpacity style={styles.container_save}>
                <Text style={styles.text_save}>Lưu</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    // header
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text_appbar: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    // lien he
    text_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5
    },
    inputTextContact: {
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    // switch
    container_switch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        padding: 10,
        borderRadius: 10,
    },

    // save
    container_save: {
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
    },
    text_save: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
