import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon_return:{
        position: 'absolute',
        top: 10,
        left: 5,
        zIndex: 100,
    },
    image_product: {
        width: '100%',
        height: 350,
        objectFit: 'fill'
    },
    container_infor: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding:10,
        borderTopStartRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: -330,
    },
    name_product: {
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily:'faustina'
    },
    price_product: {
        fontSize: 19,
        marginTop: 9,
        marginHorizontal:5
    },
    des_product: {
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom:15,
        fontSize: 18,
    },
    des_comment:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:31
    },
    container_start :{
        flexDirection:'row',
        marginTop:9,
        padding:2

    },
    star_icon:{
        width:25,
        height:25,
        marginHorizontal:5
    },


    // container add product
    container_add_product: {
        width: '100%',
        flexDirection: 'row',
        position: "absolute",
        bottom: 0
    },
    btn_messenger: {
        flex: 1,
        backgroundColor: '#15FF00',
        alignItems: 'center',
        padding: 10,
        borderRightWidth: 1
    },
    btn_cart: {
        flex: 1,
        backgroundColor: '#15FF00',
        alignItems: 'center',
        padding: 8,
    },
    btn_sell: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE941A',
    },
    containerProduct_line: {
        width:'100%',
        marginTop:28,

    },
    containerProduct_line_2:{
        width:'100%',
        marginTop:70

    },
    lineProduct:{
        width: '100%',
        height: 1,
        backgroundColor: '#D7D4D4',

    },
    containercomment:{

    }
})

export default styles;