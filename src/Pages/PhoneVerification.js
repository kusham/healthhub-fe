import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageOne from '../components/ImageOne';
import Background from '../components/Background';
import './PhoneVerification.css'; 

const PhoneVerification = () => {
    const navigate = useNavigate();  
  
    const navigateToLoginPage = () => {
      navigate('/login');  
    };


  return (

    <div className='phone-verification-page'>
      <Header/>
      <Link to="/signup" className="phone-verification-back">
                            <img src={`/images/back-icon.png`} alt="Back Arrow" className="phone-verification-back-arrow"/>
                            Back
                        </Link>
      <Background/>
    <div className="phone-verification-container">
   
      <div className="phone-verification-content">
        <h1 className="verification-heading">Phone Verification</h1>
        <p className="verification-subtext">
          Please enter the 6-digit verification code sent to +94 7x xxx xxxx. The code is valid for 30 minutes.
        </p>
          <div className='verification-text'>Phone Number Verification Code</div>
            <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
                <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
                <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
                <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
                <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
                <div className="verification-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                <rect x="0.5" y="0.5" width="72" height="68" rx="7.5" fill="white" stroke="#61206C"/>
                </svg></div>
              
                <div className='submit-button-container'>
              <button className="submit-button" onClick={navigateToLoginPage}>Submit</button>
              </div>
                <p className="code-not-received">Didn’t receive the code ?</p>
            </div>
            </div>
      <ImageOne />
   <Footer />
  </div>
  );
}
export default PhoneVerification;
