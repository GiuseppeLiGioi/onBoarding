import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "black",
    padding: 20,
    width: "100%",
  },

  containerInput: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderRadius: 15,
  },

  inputStyle: {
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
    minWidth: "70%",
    textAlign: "center",
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
    alignSelf: "center",
  },

  taskList: {
    padding: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 20,
    minWidth: "90%",
  },

  containerSingleTask: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 20,
    marginTop: 10,
  },

  optionButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
  },

  containerButtonsList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },

  textButton: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
  },

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },

  containerModal: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "blue",
  },

  containerButtonsModal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 20,
  },

  modalButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "blue",
  },

  textModal: {
    fontSize: 14,
    color: "black",
  },
});
