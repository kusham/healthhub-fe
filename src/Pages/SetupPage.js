import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import './SetupPage.css';
import Background from '../components/Background';
import { validationSchemaProfile } from '../utils/Validations';
import { signUp } from '../actions/AuthActions';

const SetupPage = () => {
    const navigate = useNavigate(); 
    const location = useLocation();  
    const [inputs, setInputs] = useState({
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      NIC: "",
      dob: "",
      address: "",
      city: "",
      password: "",
      postalCode: "",
      mobileNumber: location.state?.mobileNumber
    });
    const [validationMode, setValidationMode] = useState(false);
    const [errors, setErrors] = useState({});

    const navigateToLoginPage = () => {
      navigate("/login");
    };

    const handleOnChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
  
    const handleSignUp = () => {
      setValidationMode(true);
      validationSchemaProfile
      .validate(inputs, { abortEarly: false })
      .then(() => {
          signUp(inputs, navigateToLoginPage);
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
        validationSchemaProfile
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

    return (
      <div className="setup-page">
        <Header/>
        <Background/>
        <div className="main-content">
          <h1 className="page-heading">Set up your profile</h1>

          <p className="sub-text">
            Please provide the following information as shown on your passport or ID.
          </p>

          <input onChange={handleOnChange} value={inputs.email} name='email' type="text" className="input-box email" placeholder="Email Address"/>
          {errors?.email && (
          <div className="error-message">{errors?.email}</div>
        )}
          <div className="name-row">
            <input onChange={handleOnChange} name='firstName' value={inputs.firstName} type="text" className="input-box first-name" placeholder="First Name" />
            <input onChange={handleOnChange} name='middleName' value={inputs.middleName} type="text" className="input-box middle-name" placeholder="Middle Name" />
          </div>
          <input onChange={handleOnChange} name='lastName' value={inputs.lastName} type="text" className="input-box last-name" placeholder="Last Name" />

          <input onChange={handleOnChange} name='password' value={inputs.password} type="password" className="input-box create-password" placeholder="Create Password" />
          <div className="password-info">
            <ul className='password-info-text'>
              <li>8 or more characters</li>
              <li>Use 2 of the following: letters, numbers, or symbols</li>
            </ul>
  
          </div>
          <input onChange={handleOnChange} name='NIC' value={inputs.NIC} type="text" className="input-box nic-number" placeholder="NIC Number" />
          <input onChange={handleOnChange} name='dob' value={inputs.dob} type="text" className="input-box dob" placeholder="Date of Birth" />
          <input onChange={handleOnChange} name='address' value={inputs.address} type="text" className="input-box address" placeholder="Address Line" />

          <div className="city-postal-row">
            <input onChange={handleOnChange} name='city' value={inputs.city} type="text" className="input-box city" placeholder="City" />
            <input onChange={handleOnChange} name='postalCode' value={inputs.postalCode} type="text" className="input-box postal-code" placeholder="Postal Code" />
          </div>

          <div className='setup-privacy-statement-text'>
              <div className='setup-box'></div>
              <p>By clicking the button below, I agree to bound by 
                  Health Hub’s User Agreement and the Privacy Statement.</p>
          </div>
        </div>
        <button className='create-account-button' onClick={handleSignUp}>Agree and Create Account</button>
        <ImageOne/>
        <Footer/>
      </div>
    );
  };
  

export default SetupPage;

























// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ImageOne from '../components/ImageOne';
// import Background from '../components/Background';
// import './SetupPage.css';

// const SetupPage = () => {
//     const navigate = useNavigate();  
  
//     const navigateToPackageSelectionPage= () => {
//       navigate('/packages');  
//     };

//   return (
//     <div className="setup-container">
//         <Header/>
        
//       <h1 className="setup-heading">Set Up Your Profile</h1>
//       <p className="setup-subtext">
//         Please provide the following information as shown on your passport or ID.
//       </p>

//       {/* Textboxes for user information */}
//       <div className="textbox-container">
//         <input type="text" className="textbox" placeholder="Email Address" />
//         <div className="name-container">
//           <input type="text" className="textbox name-textbox" placeholder="First Name" />
//           <input type="text" className="textbox name-textbox" placeholder="Last Name" />
//         </div>
//         <div>
//         <input type="text" className="textbox" placeholder="Middle Name" />
//         </div>
//         <div>
//         <input type="text" className="textbox" placeholder="Create Password" />
//         </div>
//         <p className="password-info">8 more characters</p>
//         <div>
//         <input type="text" className="textbox" placeholder="NIC Number" />
//         </div>
//         <input type="text" className="textbox" placeholder="Date of Birth" />
//         <input type="text" className="textbox" placeholder="Address Line" />
//         <div className="location-container">
//           <input type="text" className="textbox location-textbox" placeholder="City" />
//           <input type="text" className="textbox location-textbox" placeholder="Postal Code" />
//         </div>
//       </div>

//       <p className="terms-text">
//         By clicking the button below, I agree to be bound by Health Hub’s User Agreement and the Privacy Statement.
//       </p>

//       <button onClick={navigateToPackageSelectionPage}>Agree and Create Account</button>
//       <ImageOne/>
//       <Footer/>
//     </div>
//   );
// }

// export default SetupPage;


