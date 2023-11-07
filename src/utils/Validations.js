import * as yup from "yup";

export const validationSchemaUserSignup = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/^7\d{8}$/, "Invalid Mobile Format")
    .required("*Mobile is Required"),
});

export const validationSchemaProfile = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is Required"),
  // NIC: yup
  //   .string()
  //   .test({
  //     message:
  //       "Please enter the correct NIC format. Old NIC format - 10 characters (First 9 numerical & last digit X or V. New NIC format - 12 characters (All numerical)",
  //     test: (nic) => {
  //       if (nic?.match(/^[0-9]{12}$/) || nic?.match(/^([0-9]{9})(V|v|X|x)$/)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },
  //   })
  //   .required("NIC is Required"),
  // dob: yup.string().required("Birthday is Required"),
  // mobileNumber: yup
  //   .string()
  //   .matches(/^7\d{8}$/, "Invalid Mobile Format")
  //   .required("*Mobile is Required"),
});

export const validationSchemaUserLogin = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/^7\d{8}$/, "Invalid Mobile Format")
    .required("*Mobile is Required"),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
    //   "Password must have special character"
    // )
    .min(5, "Password must be more than 5 characters long")
    .required("Password is Required"),
});
