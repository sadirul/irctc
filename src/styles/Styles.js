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
        color: '#141823',
    },
    subtitleStyle: {
        fontFamily: 'Helvetica',
        fontWeight: 600,
        fontSize: 35,
        color: '#141823',
    },
    inputStyle: {
        height: 40,
        marginHorizontal: 12,
        marginVertical: 8,
        borderWidth: 1,
        padding: 12,
        fontSize: 15,
        color: 'black',
    },
    datePickerView: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 12,
        height: 40,
    },
    dateInput: {
        fontSize: 15,
        color: 'gray'
    },
    inputTitleStyle: {
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    getUseridButton: {
        margin: 12,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getUseridText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles