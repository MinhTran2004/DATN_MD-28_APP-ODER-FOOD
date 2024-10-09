import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../CSS/CSSHome";
import ComponentHome from "../Component/Component_Home";
import { useState } from "react";

export default function ScreenHome({ navigation }: any) {
    const [search, setSearch] = useState("");

    return (
        <ScrollView>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../Image/user.png")} style={{ width: 45, height: 45 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[styles.text_header, { fontWeight: "normal", color: '#8c8d8e' }]}>Thành viên</Text>
                            <Text style={styles.text_header}>Trần Công Minh</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <View style={styles.icon_header}>
                            <Image source={require("../Image/cart.png")} style={{ width: 30, height: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <ComponentHome.Input_Screach input={search} event={setSearch} />

                {/* body  */}
                <ComponentHome.Text_Title text={"Special Offers"} />
                <Image source={require("../Image/logo_demo.jpg")} style={styles.img_body} />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_hambuger.png")} text={"Hambuger"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_chicken.png")} text={"Chicken"} />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_cake.png")} text={"Dessest"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("../Image/icon_more.png")} text={"More"} />
                </View>

                <ComponentHome.Text_Title text={"Discount Guaranteed!"} />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                    </View>
                </ScrollView>

                <ComponentHome.Text_Title text={"Recommended For You"} />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_all.png")} text={"All"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_hambuger.png")} text={"Hambuger"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_chicken.png")} text={"Chicken"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_cake.png")} text={"Dessest"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("../Image/icon_more.png")} text={"More"} />
                </ScrollView>


                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />
                <ComponentHome.ProductVertical navigation={navigation} />

            </View>
        </ScrollView>
    )
}