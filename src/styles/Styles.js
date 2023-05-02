import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    logoImage: {
        width: 96,
        height: 96,
    },
    headerTextStyle: {
        fontFamily: 'Helvetica',
        fontWeight: 800,
        fontSize: 48,
        color: '#141823'
    },
    subtitleStyle: {
        fontFamily: 'Helvetica',
        fontWeight: 600,
        fontSize: 38,
        color: '#141823'
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 12,
    }
});

export default styles