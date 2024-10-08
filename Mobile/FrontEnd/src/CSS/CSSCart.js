import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    // header
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },

    // footer
    container_footer: {
        backgroundColor: 'white',
        padding: 10
    },
    text_total: {
        color: 'black',
        fontWeight: '500',
        fontSize: 23
    },
    btn_payment: {
        backgroundColor: '#33c262',
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },
    text_payment: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }


})

export default styles;