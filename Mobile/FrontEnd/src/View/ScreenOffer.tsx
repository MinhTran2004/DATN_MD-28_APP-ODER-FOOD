import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../CSS/CSSOffer';
import Feather from 'react-native-vector-icons/Feather';

export default function ScreenOffer({ navigation }: any) {
    return (
        <ScrollView>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={{ fontSize: 30 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Ưu đãi</Text>
                </View>

                {/* body  */}
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
                <Image source={require('../Image/logo_demo.jpg')} style={styles.img_body} />
            </View>
        </ScrollView>
    );
}
