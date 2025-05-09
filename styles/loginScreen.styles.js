import { StyleSheet } from "react-native";

export default LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0B8E0",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  error: {
    color: "red",
    marginBottom: 12,
    fontSize: 13,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#D0B8E0",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#6A0DAD",
    fontWeight: "600",
    fontSize: 16,
  },
  inputWithEye: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#333",
    paddingRight: 8,
    minWidth: 0,
  },
  eyeIcon: {
    paddingLeft: 8,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 5,
    resizeMode: "contain",
  },
});
