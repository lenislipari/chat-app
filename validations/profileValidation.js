import * as Yup from "yup";

export const profileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[^\d]*$/, "Name cannot contain numbers"),

  phone: Yup.string()
    .required("Phone is required")
    .matches(
      /^[0-9+\-\s()]*$/,
      "Phone must be valid (numbers and symbols only)"
    ),

  status: Yup.string()
    .required("Status is required")
    .matches(/^[^\d]*$/, "Status cannot contain numbers"),
});
