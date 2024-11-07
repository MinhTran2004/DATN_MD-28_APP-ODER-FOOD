import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 4,
    },
    text_title: {
        fontSize: 25,
        color: '#1bac4b',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default styles;
