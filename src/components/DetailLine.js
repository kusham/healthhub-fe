import React from 'react';
import './DetailLine.css';
import { Link, useNavigate } from 'react-router-dom';

const DetailLine = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();
        navigate("/")
      };
    return (
        
        <div className="detail-line">
            <div className="detail-item">
                Account Settings
                <span className="detail-dropdown-icon">▼</span>
            </div>
            <div className="detail-item">Payments</div>
            <Link to="/report-generate" className="detail-line-link">
                <div className="detail-item">Report Generation</div>
            </Link>
            <div className="detail-item">Downloads</div>
            <div className="detail-item">
                Recommendations
                <span className="detail-dropdown-icon">▼</span>
            </div>
            
            <Link to="/report-share" className="detail-line-link">
            <div className="detail-item">
                Share
                <span className="detail-dropdown-icon">▼</span>
            </div>
            </Link>

            <div className="detail-item" onClick={handleLogout}>
                Sign Out 
                <span className="detail-forward-arrow">&#x2192;</span>
            </div>
        </div>
        
    );
}

export default DetailLine;
