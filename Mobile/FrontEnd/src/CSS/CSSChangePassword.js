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
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#ff6f61',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'rgba(255, 255, 255, 255)',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#000',
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    button: {
        marginLeft: 40,
        width: '80%',
        height: 50,
        backgroundColor: '#ff6f61',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 10,
        marginTop: 10,

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})

export default styles;