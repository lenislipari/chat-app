import { StyleSheet } from "react-native";

export default chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#6A0DAD",
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#6A0DAD",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  backButton: {
    marginRight: 12,
  },
  backText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
