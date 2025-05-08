import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import profileData from '../mocks/profile.json';
import Toast from 'react-native-toast-message';
import { profileValidationSchema } from '../validations/profileValidation';


export default function ProfileScreen() {
  const { profile } = profileData;

  const handleSubmit = () => {
    Toast.show({
      type: 'success',
      text1: 'Profile updated!',
      position: 'top',
      visibilityTime: 3000,
    });
  };
  return (
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
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <Text>Phone</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

            <Text>Status</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('status')}
              onBlur={handleBlur('status')}
              value={values.status}
            />
            {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}

            <Button title="Save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
