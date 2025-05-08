import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Formik } from "formik";
import profileData from "../mocks/profile.json";
import Toast from "react-native-toast-message";
import { profileValidationSchema } from "../validations/profileValidation";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { profile } = profileData;

  const handleSubmit = () => {
    Toast.show({
      type: "success",
      text1: "Profile updated!",
      position: "top",
      visibilityTime: 3000,
    });
  };
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={{ uri: profile.photo }} style={styles.avatar} />
        <Formik
          initialValues={{
            name: profile.name,
            phone: profile.phone,
            status: profile.status,
          }}
          validationSchema={profileValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <>
              <Text>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <Text>Phone</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              <Text>Status</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("status")}
                onBlur={handleBlur("status")}
                value={values.status}
              />
              {touched.status && errors.status && (
                <Text style={styles.error}>{errors.status}</Text>
              )}

<View style={styles.buttonRow}>
  <TouchableOpacity
    style={[styles.actionButton, styles.logoutButton, { marginRight: 8 }]}
    onPress={handleLogout}
  >
    <Ionicons name="close" size={20} color="white" style={styles.icon} />
    <Text style={styles.buttonText}>Logout</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.actionButton, styles.saveButton]}
    onPress={handleSubmit}
  >
    <Ionicons name="checkmark" size={20} color="white" style={styles.icon} />
    <Text style={styles.buttonText}>Save</Text>
  </TouchableOpacity>
</View>

            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
    flexDirection: 'row',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  logoutButton: {
    backgroundColor: '#F44336',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
  
});
