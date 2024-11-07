import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Component_EditAddress {
    static SelectAddress = ({ name, onSelect, selected, onDismiss }: any) => {
        const [listCity, setListCity] = useState(false);

        const data = ["Ha Noi", "Hung Yen", "Hai Duong", "Vinh Phuc", "Hai Phong", "Nam Dinh", "Sai Gon"];

        const handleSelect = (item: string) => {
            onSelect(item); // Gọi hàm onSelect khi chọn địa chỉ
            setListCity(false); // Đóng danh sách
        };

        return (
            <View style={styles.container_Select_Address}>
                <TouchableOpacity
                    style={styles.btn_select_address}
                    onPress={() => setListCity(!listCity)}
                >
                    <Text>{selected || name}</Text>
                    <AntDesign name="down" style={{ fontSize: 20 }} />
                </TouchableOpacity>

                {listCity && (
                    <TouchableWithoutFeedback onPress={onDismiss}>
                        <View style={styles.container_list_address}>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelect(item)}>
                                        <Text style={styles.name_Address}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_Select_Address: {
        marginBottom: 10,
    },
    btn_select_address: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e7e7e7',
        padding: 15,
        borderRadius: 10,
    },
    container_list_address: {
        width: '100%',
        height: 150,
        position: 'absolute',
        backgroundColor: '#f2f2f2',
        bottom: -150,
        zIndex: 100,
        marginTop: 10, // Thêm marginTop để lùi danh sách xuống
    },
    name_Address: {
        fontSize: 20,
        padding: 10,
    },
});
