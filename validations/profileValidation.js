import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
  status: Yup.string().required('Status is required'),
});
