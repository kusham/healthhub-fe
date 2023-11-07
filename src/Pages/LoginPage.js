import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageOne from "../components/ImageOne";
import "./LoginPage.css";
import Background from "../components/Background";
import { validationSchemaUserLogin } from "../utils/Validations";
import { login } from "../actions/AuthActions";

function LoginPage(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    mobileNumber: "",
  });
  const [validationMode, setValidationMode] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOnChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    setValidationMode(true);
    validationSchemaUserLogin
      .validate(inputs, { abortEarly: false })
      .then(() => {
        login(inputs, navigateToApp);
      })
      .catch((validationErrors) => {
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  useEffect(() => {
    if (validationMode) {
      validationSchemaUserLogin
        .validate(inputs, { abortEarly: false })
        .then(() => {
          setErrors(null);
        })
        .catch((validationErrors) => {
          const newErrors = {};
          validationErrors.inner.forEach((error) => {
            newErrors[error.path] = error.message;
          });
          setErrors(newErrors);
        });
    }
  }, [inputs, validationMode]);

  const navigateToApp = (havePackage) => {
    if (havePackage) {
      navigate('/home');  
    } else {
      navigate('/packages');  
    }
  };
  return (
    <div className="login-page">
      <Header />
      <Background />
      <div className="login-container">
        <h1 className="login-header">Log In</h1>
        <div className="login-input-container">
          <input
            type="text"
            className="login-page-text-box"
            placeholder="Mobile Number"
            onChange={handleOnChange}
            value={inputs.mobileNumber}
            name="mobileNumber"
          />
          {errors?.mobileNumber && (
          <div className="error-message">{errors?.mobileNumber}</div>
        )}
          <input
            type="password"
            className="login-page-text-box"
            placeholder="Password"
            onChange={handleOnChange}
            value={inputs.password}
            name="password"
          />
          {errors?.password && (
          <div className="error-message">{errors?.password}</div>
        )}
        </div>
        <p className="forgot-password">Forget Password?</p>

        <div className="login-buttons">
          <button
            onClick={handleLogin}
            className="login-login-button"
            style={{
              color: "#4F1A67",
            }}
          >
            Login
          </button>
          <p className="or-text">or</p>
          <Link
            to="/signup"
            className="login-signup-button"
            style={{
              color: "#BF6AF4",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <ImageOne />
      <Footer />
    </div>
  );
}

export default LoginPage;
