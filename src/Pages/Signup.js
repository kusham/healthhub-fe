import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageOne from "../components/ImageOne";
import "./Signup.css";
import Background from "../components/Background";
import { validationSchemaUserSignup } from "../utils/Validations";

const Signup = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [validationMode, setValidationMode] = useState(false);
  const [errors, setErrors] = useState({});

  const navigateToSetupPage = () => {
    navigate("/setup", { state: { mobileNumber: mobileNumber } });
  };
  const navigateToLoginPage = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    setValidationMode(true);
    validationSchemaUserSignup
      .validate({ mobileNumber: mobileNumber }, { abortEarly: false })
      .then(() => {
        navigateToSetupPage();
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
      validationSchemaUserSignup
        .validate({ mobileNumber: mobileNumber }, { abortEarly: false })
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
  }, [mobileNumber, validationMode]);

  return (
    <div className="signup-page">
      <Header />
      <button className="signup-login-button" onClick={navigateToLoginPage}>
        Login
      </button>
      <Background />

      <div className="signup-container">
        <h1 className="title">Sign Up for HEALTH HUB</h1>
        <p className="subtext">First, add your mobile number</p>
        <p className="phone-label">Phone Number</p>

        <div className="input-boxes">
          <div className="small-box">
            <img
              src="/images/country.png"
              alt="country logos"
              className="small-box-image"
            />
            <span className="small-box-text">+94</span>
            <span className="small-box-icon">▼</span>
          </div>
          <input
            onChange={(event) => setMobileNumber(event.target.value)}
            className="large-box"
          ></input>
        </div>
        {errors?.mobileNumber && (
          <div className="error-message">{errors?.mobileNumber}</div>
        )}

        <div className="confirmation-container">
          <p className="confirmation-text">
            By continuing, you confirm that you’re the owner or primary user of
            this mobile phone number.
          </p>
        </div>
        <div className="next-button-container">
          <button className="next-button" onClick={handleSignup}>
            Next
          </button>
        </div>
      </div>

      <ImageOne />
      <Footer />
    </div>
  );
};

export default Signup;
