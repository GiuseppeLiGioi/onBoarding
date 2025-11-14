import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "black",
        padding: 20,
        width: "100%"

    },

    containerInput: {
        backgroundColor: "white",
        padding: 20,
        width: "100%",
        borderWidth: 2,
        borderRadius: 15
    },

    inputStyle: {
        padding: 10,
        borderColor: "blue",
        borderWidth: 2,
        minWidth: "70%",
        borderRadius: 15,

    },

    textAdd: {
        color: "black",
        fontSize: 12,
    },

      buttonAdd: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "blue",
        marginTop: 10,
        maxWidth: "50%",
        alignSelf: "center"

    },

    taskList:{
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        marginTop: 20,
        minWidth: "60%",


    }
})