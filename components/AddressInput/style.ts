import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 30,
  },
  inputContainer: {
    width: '95%',
    flex: 0
  },
  listView: {
    position: "absolute",
    top: 90,
    width: "100%",
    zIndex: 999,
    elevation: 999, // Android
    backgroundColor: "#fff",
  },
  textInputFocus: {
    borderWidth: 1,
    borderColor: "#111184",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 30,
  },
})