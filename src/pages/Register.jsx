import React from "react";
// Lấy dữ liệu từ form (formik)
import { useFormik } from "formik";
import * as yup from "yup";
import { http } from "../util/config";
import { Navigate, useNavigate } from "react-router-dom";
const Register = (props) => {
  const navigate = useNavigate();
  const registerFrm = useFormik({
    initialValues: {
      email: "",
      password: "",
      gender: "",
      phone: "",
      name: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank !")
        .email("Email is invalid "),
      password: yup
        .string()
        .required("Password cannot be blank !")
        .min(6, "6-32 characters !")
        .max(32, "6-32 characters !"),
      name: yup.string().required("Name cannot be blank !"),
      phone: yup
        .string()
        .required("Name cannot be blank !")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Phone is a number !"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        // Lấy dữ liệu từ form => call api gửi dữ liệu đi
        const res = await http.post("/api/Users/signup", values);
        alert(res.data?.message);
        navigate("/login");
      } catch (err) {
        alert(err.response.data?.message);
      }
    },
  });
  return (
    <form className="container" onSubmit={registerFrm.handleSubmit}>
      <h3>Register</h3>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>email</p>
            <input
              className="form-control"
              id="email"
              name="email"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.email && (
              <p className="alert alert-danger">{registerFrm.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              className="form-control"
              id="password"
              name="password"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.password && (
              <p className="alert alert-danger">
                {registerFrm.errors.password}
              </p>
            )}
          </div>
          <div className="form-group">
            <p>Gender</p>
            <input
              className="form-check-input"
              id="gender1"
              name="gender"
              type="radio"
              value={true}
              onInput={registerFrm.handleChange}
            />
            <label for="gender1">Male</label>
            <input
              className="form-check-input ms-4"
              id="gender2"
              name="gender"
              type="radio"
              value={false}
              onInput={registerFrm.handleChange}
            />
            <label for="gender2">Female</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              id="name"
              name="name"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.name && (
              <p className="alert alert-danger">{registerFrm.errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <p>phone</p>
            <input
              className="form-control"
              id="phone"
              name="phone"
              onInput={registerFrm.handleChange}
              onBlur={registerFrm.handleBlur}
            />
            {registerFrm.errors.phone && (
              <p className="alert alert-danger">{registerFrm.errors.phone}</p>
            )}
          </div>
          <div className="form-group mt-2">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={!registerFrm.isValid}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
