import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import DetailLine from "../components/DetailLine";
import "./ReportGeneratePage.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfTemplate from "../components/PdfTemplate";
import { getHealthData } from "../actions/AuthActions";

const ReportGeneratePage = () => {
    const [healthData, setHealthData] = useState(null);
    const fetchData = async () => {
      setHealthData(await getHealthData());
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className="report-generate-page">
      <Header />
      <Background />
      <Navbar />
      <DetailLine />

      <div className="report-generate-box">
        <div className="report-generate-box-heading">Health Report</div>
        <div className="report-generate-box-content">
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxx</p>
        </div>
      </div>

      <div className="report-generate-button-container">
        <div className="generate-download-section">
          <p>Download pdf to your device</p>
          
          <div className="generate-download-btn">
          <PDFDownloadLink document={<PdfTemplate healthData={healthData}/>} fileName="report.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
            <img
              src="/images/hand-icon.png"
              alt="Hand Icon"
              className="generate-hand-icon"
            />
          </div>
        </div>

        <div className="generate-email-section">
          <p>Send an email</p>
          <button className="generate-email-btn">
            Click Here
            <img
              src="/images/hand-icon.png"
              alt="Hand Icon"
              className="generate-hand-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportGeneratePage;
