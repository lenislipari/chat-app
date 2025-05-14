import { StyleSheet } from "react-native";

export default profileStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
  },
  logoutButton: {
    backgroundColor: "#F44336",
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
