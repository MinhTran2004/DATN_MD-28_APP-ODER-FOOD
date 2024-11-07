import { useState } from "react";
import { Image, StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Component_Profile {
    static Item_Profile = ({ name, icon, navigation, screen, isEdit }: any) => {
        const [isSwitch, setIsSwitch] = useState(false);
        return (
            <TouchableOpacity onPress={() => navigation.navigate(screen, { isEdit })}>
                <View style={styles.container_item_profile}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={icon} style={{ width: 22, height: 22 }} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>{name}</Text>
                    </View>
                    <AntDesign name="right" style={{ fontSize: 18, color: '#000' }} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    // Item_Profile
    container_item_profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 18,
        // borderTopWidth: 0.5,
        // borderBottomWidth: 0.5,
        // borderColor: '#ddd'
    }
});
