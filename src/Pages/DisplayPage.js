import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import DetailLine from '../components/DetailLine';
import Background from '../components/Background';
import './DisplayPage.css';

const DisplayPage = () => {
    const [user, setUser] = useState(null);
    useEffect(()=> {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, [])
    return (
        <div className="display-page">
            <Header />
            <Background/>
            <Navbar />
            <DetailLine />

            <div className="display-main-content">
                <div className="display-left-section">
                    <div className="display-textbox profile">
                        <div className='display-profile-row'>
                        <img src="/images/profile.png" alt="Profile" className='display-image-profile'/>
                        <h2>Profile</h2>
                        </div>
                        <p>Name: {user?.firstName + user?.middleName + user?.lastName}</p>
                        <p>NIC Number: {user?.NIC}</p>
                        <p>Date of Birth: {user?.dob}</p>
                        <p>Address: {user?.address}</p>
                        <p>City: {user?.city}</p>
                        <p>Phone Number: {user?.mobileNumber}</p>
                        <p>Email: {user?.email}</p>
                    </div>
                    <div className="display-textbox work">
                        <h2>Today's Work</h2>
                        <p>Basic Plan activated</p>
                        <p>$3.99</p>
                        <hr />
                        <p>Completed Payment</p>
                    </div>
                </div>

                <div className="display-right-section">
                    <div className='display-first-row'>
                    <div className="display-textbox heart-rate">
                        <div className='display-heart-rate'>
                        <img src="/images/heart_rate.png" alt="Heart Rate" className='display-image-heart-rate' />
                        <p>104 bpm</p>
                        </div>
                        <h3>Heart Rate</h3>
                    </div>
                    <div className="display-textbox cholesterol">
                    <div className='display-cholesterol'>
                        <img src="/images/cholesterol.png" alt="Cholesterol" className='display-image-cholesterol' />
                        <p>170 mg/dL</p>
                        </div>
                        <h3>Cholesterol Level</h3>
                    </div>
                    <div className="display-textbox blood-pressure">
                    <div className='display-blood-pressure'>
                        <img src="/images/blood-pressure.png" alt="Blood Pressure" className='display-image-blood-pressure'/>
                        <p>120 mm Hg</p>
                        </div>
                        <h3>Blood Pressure</h3>
                    </div>
                    </div>
                    <div className='display-second-row'>
                        <div className='display-second-row-first-column'>
                    <div className="display-textbox glucose">
                    <div className='display-glucose'>
                        <img src="/images/glucose-level.png" alt="Glucose Level" className='display-image-glucose-level' />
                        <p>99 mg/dL</p>
                        </div>
                        <h3>Glucose Level</h3>
                    </div>
                    <div className="display-textbox weight">
                    <div className='display-weight'>
                        <img src="/images/Weight1.png" alt="Weight" className='display-image-weight'/>
                        <p>65 kg</p>
                        </div>
                        <h3>Weight</h3>
                    </div>
                    </div>
                    <div className="display-textbox overall-health">
                        <h3>Overall Health</h3>
                        <div className='overall-health-image-container'>
                        <img src="/images/overall-chart.png" alt="Health_Image 1" className='display-image-overall-chart'/>
                        <img src="/images/overall-circle.png" alt="Health_Image 2" className='display-image-overall-circle'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="dispplay-activity-box">
                <div className='display-activity-box-row'>
                <img src="/images/bar-chart.png" alt="chart" className='display-image-bar-chart'/>
                <h3>Last 7 days activity</h3>
                    <p style={{ textDecoration: 'underline' }}>Click to see all</p> 
                    </div>
                    <div className="display-activity-content">
                        <p>ID</p>
                        <p>Date</p>
                        <p>Activity</p>
                        <p>Health Condition</p>
                    </div>
            </div>

        </div>
    );
}

export default DisplayPage;

