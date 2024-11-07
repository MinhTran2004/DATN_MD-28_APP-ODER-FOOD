import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Modal, TouchableWithoutFeedback } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ComponentEditAddress from "../Component/Component_EditAddress"; 
import { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ScreenEditAddress({ navigation, route }: any) {
    const [isSwitch, setIsSwitch] = useState(false);
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const isEdit = route.params.isEdit;

    const handleSave = () => {
        setDialogVisible(true);
        setTimeout(() => {
            setDialogVisible(false);
            navigation.goBack();
        }, 2000);
    };

    const handleSelect = (type: string) => {
        // Logic để xử lý việc chọn địa chỉ và cập nhật state dựa trên lựa chọn
        // Điều này có thể là một modal hoặc một màn hình khác để chọn
    };

    const dismissSelection = () => {
        setSelectedCity(null);
        setSelectedDistrict(null);
        setSelectedWard(null);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissSelection}>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.text_appbar}>Thay đổi địa chỉ</Text>
                </View>

                {/* Liên hệ */}
                <Text style={styles.text_title}>Liên hệ</Text>
                <TextInput style={[styles.inputTextContact, { marginBottom: 10 }]} placeholder="Nhập tên của bạn" />
                <TextInput style={styles.inputTextContact} placeholder="Nhập số điện thoại" />

                <Text style={styles.text_title}>Địa chỉ</Text>
                {/* Chọn Thành Phố */}
                <ComponentEditAddress.SelectAddress name={"Chọn thành phố"} onSelect={() => handleSelect('city')} selected={selectedCity} />
                <ComponentEditAddress.SelectAddress name={"Chọn quận"} onSelect={() => handleSelect('district')} selected={selectedDistrict} />
                <ComponentEditAddress.SelectAddress name={"Chọn phường"} onSelect={() => handleSelect('ward')} selected={selectedWard} />
                <TextInput style={[styles.inputTextContact, { marginTop: 0 }]} placeholder="Nhập địa chỉ cụ thể" />

                {/* Cài đặt */}
                <Text style={styles.text_title}>Cài đặt</Text>

                <View style={styles.container_switch}>
                    <Text style={styles.switch_text}>Đặt làm mặc định</Text>
                    <Switch value={isSwitch} onValueChange={() => setIsSwitch(!isSwitch)} />
                </View>

                <TouchableOpacity style={styles.container_save} onPress={handleSave}>
                    <Text style={styles.text_save}>Lưu</Text>
                </TouchableOpacity>

                {/* Dialog Thành Công */}
                <Modal transparent={true} visible={isDialogVisible} animationType="fade">
                    <View style={styles.modalOverlay}>
                        <View style={styles.dialogContainer}>
                            <MaterialIcons name="check-circle" size={50} color="green" />
                            <Text style={styles.dialogMessage}>
                                {isEdit ? "Sửa địa chỉ thành công!" : "Thêm địa chỉ thành công!"}
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    iconBack: {
        fontSize: 28,
        color: 'black',
    },
    text_appbar: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    text_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    inputTextContact: {
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
        fontSize: 16,
    },
    container_switch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        padding: 10,
        borderRadius: 10,
    },
    switch_text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
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
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dialogContainer: {
        width: 250,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    dialogMessage: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
});
