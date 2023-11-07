import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PackageSelection.css";
import Background from "../components/Background";
import { getPackages, selectPackage } from "../actions/PackageActions";

const PackageSelection = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  const handleSelect = (packageId) => {
    selectPackage(packageId, navigateToHome);
  };
  const navigateToHome = () => {
    navigate("/home");
  };
  const fetchPackages = async () => {
    setPackages(await getPackages());
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div className="package-page">
      <Header />
      <Background />

      <main>
        <div className="package-selection-container">
          <div className="package-heading">
            <h1>Package Selection </h1>
          </div>
          <div className="package-selection-content">
            <h1 className="choose-your-plan">Choose your plan</h1>
            <div className="package-boxes">
                {packages?.map((packageItem, index1) => (
                  <div className="package-box-premium" key={index1}>
                    <h2 className="package-title preminum">
                      {packageItem?.title}
                    </h2>
                    <p className="package-price">{packageItem?.price}</p>
                    <ul className="package-features">
                      {packageItem?.description?.map((item, index2) => (
                        <li key={index2}>
                          <span className="tick-mark"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="package-select-button"
                      onClick={() => handleSelect(packageItem?._id)}
                    >
                      Select
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackageSelection;
