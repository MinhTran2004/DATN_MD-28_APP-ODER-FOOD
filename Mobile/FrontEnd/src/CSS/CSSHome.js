import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f6f6f7',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    // header 
    container_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_header: {
        fontSize: 17,
        fontWeight: "bold",
        color: 'black'
    },
    icon_header: {
        borderWidth: 0.5,
        borderColor: '#c2c2c2',
        borderRadius: 50,
        padding: 9,
    },
    // body
    img_body: {
        width: '100%',
        height: 180,
        objectFit: 'fill',
        borderRadius: 10,
        marginBottom: 20,
    },

})

export default styles;