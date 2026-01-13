import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import '../css/dashboard.css';
import logo from '../img/logo.png';
import dashboard from '../img/dashboard.png';
import departments from '../img/departments.png';
import helpdesk from '../img/helpdesk.png';
import logout from '../img/logout.png';
import personal from '../img/personal.png';
import medical from '../img/medical.png';
import symptoms from '../img/symptoms.png';
import diagnosis from '../img/diagnosis.png';
import ppf from '../img/ppf.jpg';

const Dashboard = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="profile-picture">
            <img src={ppf} alt="Profile Picture" />
          </div>
        </div>

        <div className="sidebar-links">
          <ul>
            <li><Link to="#"><img src={dashboard} alt="Dashboard Icon" />Dashboard</Link></li>
            <li><Link to="#"><img src={departments} alt="Departments Icon" />Departments</Link></li>
            <li><Link to="#"><img src={helpdesk} alt="Helpdesk Icon" />Helpdesk</Link></li>
            <li><Link to="/"><img src={logout} alt="Logout Icon" />Logout</Link></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="Dmain-content">
        <header className="Dheader">
          <div className="logo-header">
            <img src={logo} alt="Nurstatistic Logo" />
          </div>
        </header>

        {/* Dashboard Section */}
        <div className="dashboard-section">
          <div className="content-cards">
            <div className="card">
              <img src={personal} alt="Personal Information Image" />
              <Link to="/patientinfo">  {/* Navigation to Personal Info */}
                <button className="card-button">Personal Information</button>
              </Link>
            </div>
            <div className="card">
              <img src={medical} alt="Medical History Image" />
              <button className="card-button">Medical History</button>
            </div>
            <div className="card">
              <img src={symptoms}alt="Symptoms Image" />
              <button className="card-button">Symptoms</button>
            </div>
            <div className="card">
              <img src={diagnosis} alt="Diagnosis Image" />
              <button className="card-button">Diagnosis</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
