import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .min(4, 'Password too short')
    .required('Password is required'),
});
