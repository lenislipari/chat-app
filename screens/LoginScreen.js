import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { loginValidationSchema } from "../validations/loginValidation";
import loginStyles from "../styles/loginScreen.styles";
import DismissKeyboardWrapper from "../components/DismissKeyboardWrapper";
import FormField from "../components/FormField";
import PrimaryButton from "../components/PrimaryButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace("Main");
  };
  const insets = useSafeAreaInsets();

  return (
    <DismissKeyboardWrapper>
      <KeyboardAvoidingView
        style={[
          loginStyles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={loginStyles.card}>
          <Image
            source={require("../assets/iconLogin.png")}
            style={loginStyles.logo}
          />

          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => handleLogin(values)}
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
                  label="Username"
                  icon="account"
                  placeholder="Username"
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  error={touched.username && errors.username}
                />

                <FormField
                  label="Password"
                  icon="lock"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry={!showPassword}
                  error={touched.password && errors.password}
                  rightIcon={
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={loginStyles.eyeIcon}
                    >
                      <MaterialCommunityIcons
                        name={showPassword ? "eye-off" : "eye"}
                        size={22}
                        color="#777"
                      />
                    </TouchableOpacity>
                  }
                />
                <PrimaryButton title="Login" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboardWrapper>
  );
}
