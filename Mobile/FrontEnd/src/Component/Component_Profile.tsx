import { useState } from "react";
import { Image, StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Component_Profile {
    static Item_Profile = ({ name, icon, navigation, screen, mode }: any) => {
        const [isSwitch, setIsSwitch] = useState(false);
        return (
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                <View style={styles.container_item_profile}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={icon} style={{ width: 20, height: 20, tintColor: '#343434' }} />
                        <Text style={{ fontSize: 20, marginLeft: 10 }}>{name}</Text>
                    </View>
                    {mode ?
                        (<Switch value={isSwitch} onChange={() => setIsSwitch(!isSwitch)} />)
                        :
                        (<AntDesign name="right" style={{ fontSize: 20, color: '#22af51' }} />)
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // Item_Profile
    container_item_profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        padding: 10,
        borderRadius: 15
    }
})