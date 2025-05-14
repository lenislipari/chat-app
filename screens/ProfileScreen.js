import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import profileData from "../mocks/profile.json";
import profileStyles from "../styles/profileScreen.styles";
import { profileValidationSchema } from "../validations/profileValidation";
import DismissKeyboardWrapper from "../components/DismissKeyboardWrapper";
import FormField from "../components/FormField";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { profile } = profileData;
    const insets = useSafeAreaInsets();

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
    <DismissKeyboardWrapper>
      <View
        style={[
          profileStyles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <Image source={{ uri: profile.photo }} style={profileStyles.avatar} />
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
            touched,
          }) => (
            <>
              <FormField
                label="Name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                touched={touched.name}
                error={errors.name}
              />
              <FormField
                label="Phone"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                touched={touched.phone}
                error={errors.phone}
                keyboardType="phone-pad"
              />
              <FormField
                label="Status"
                value={values.status}
                onChangeText={handleChange("status")}
                onBlur={handleBlur("status")}
                touched={touched.status}
                error={errors.status}
              />

              <View style={profileStyles.buttonRow}>
                <TouchableOpacity
                  style={[
                    profileStyles.actionButton,
                    profileStyles.logoutButton,
                    { marginRight: 8 },
                  ]}
                  onPress={handleLogout}
                >
                  <Ionicons
                    name="close"
                    size={20}
                    color="white"
                    style={profileStyles.icon}
                  />
                  <Text style={profileStyles.buttonText}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[profileStyles.actionButton, profileStyles.saveButton]}
                  onPress={handleSubmit}
                >
                  <Ionicons
                    name="checkmark"
                    size={20}
                    color="white"
                    style={profileStyles.icon}
                  />
                  <Text style={profileStyles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </DismissKeyboardWrapper>
  );
}
