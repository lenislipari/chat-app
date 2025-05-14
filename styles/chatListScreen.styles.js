import { StyleSheet } from "react-native";

export default chatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D0B8E0",
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
  },
  noResults: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
