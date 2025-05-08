import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { loginValidationSchema } from '../validations/loginValidation';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.replace('Main');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
