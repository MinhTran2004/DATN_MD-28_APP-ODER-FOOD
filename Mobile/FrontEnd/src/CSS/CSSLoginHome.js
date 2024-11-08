import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fefefe',
        paddingHorizontal: 10,
    },
    img_logo: {
        width: 200,
        height: 180,
    },
    text_title: {
        fontSize: 30,
        fontWeight: '500',
        color: '#414141',
        marginTop: 30
    },
    container_status_account: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    layout_btn_login: {
        width: "100%",
        height:52,
        backgroundColor: '#FE941A',
        borderRadius: 12,
        marginTop: 40
    },
    text_btn_login: {
        textAlign: 'center',
        paddingVertical: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: "light",
    },
    container_line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,

    },
    line: {
        width: '40%',
        height: 1,
        backgroundColor: '#c1c1c1',
        
    },
    text_line: {
        fontSize: 19,
        paddingHorizontal: 10,
        color: '#757575'
    },
})

export default styles;