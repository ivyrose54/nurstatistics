import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import logo from '../img/logo.png';
import ppf from '../img/ppf.jpg';
import returnIcon from '../img/return-icon.png';
import footerImage from '../img/footer-image.png';
import cardiology from '../img/cardiology.jpg';
import emergency from '../img/emergency.jpg';
import geriatrics from '../img/geriatrics.jpg';
import gynaecology from '../img/gynaecology.jpg';
import neurology from '../img/neurology.jpg';
import opthalmology from '../img/opthalmology.jpg';
import pediatrics from '../img/pediatrics.jpg';
import radiology from '../img/radiology.jpg';


const PatientInfo = () => {

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); // Navigate to the Dashboard route
  };

  //functions for save and print
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    age: '',
    dob: '',
    placeOfBirth: '',
    civilStatus: '',
    nationality: '',
    religion: '',
    homeAddress: '',
    country: '',
    province: '',
    city: '',
    barangay: '',
    zipcode: ''
  });

  const [isDashboardVisible, setIsDashboardVisible] = useState(false);  // State to toggle dashboard visibility

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function to check if all fields are filled out
  const validateFields = () => {
    for (let key in formData) {
      if (!formData[key].trim()) {
        alert(`Please fill out the field: ${key.replace(/([A-Z])/g, ' $1')}`);  
        return false;
      }
    }
    return true;
  };


  // Function to handle printing
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<h1>Patient Information</h1>');
    printWindow.document.write('<div>' + document.querySelector('.form-section').outerHTML + '</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
//end of both functions



//function for toggling the transfer new window

 // Handle form submission
 const handleSubmit = (e) => {
  e.preventDefault();
  if (validateFields()) {
    // Save the data to localStorage
    localStorage.setItem('patientData', JSON.stringify(formData));
    alert('Form data saved successfully!');
    
    // Reset the form fields
    setFormData({
      lastName: '',
      firstName: '',
      middleName: '',
      age: '',
      dob: '',
      placeOfBirth: '',
      civilStatus: '',
      nationality: '',
      religion: '',
      homeAddress: '',
      country: '',
      province: '',
      city: '',
      barangay: '',
      zipcode: ''
    });
  }
};

// Open the department window when "Transfer" button is clicked
const handleTransfer = () => {
  const newWindow = window.open("", "Transfer", "width=800,height=600");
  newWindow.document.write(`
   <html lang="en">
        <head>
            <title>Transfer Department</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f4f8f9;
                    padding: 20px;
                   background-position: center;
                   background-repeat: no-repeat;
                   background-size: cover;
                   
                }
                h1 {
                    color: #005f73;
                    margin-bottom: 20px;
                }
                .department-button {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 15px;
                    margin: 10px auto;
                    font-size: 1em;
                    border: none;
                    background: white;
                    color: #48a484;
                    border-radius: 15px;
                    cursor: pointer;
                    transition: transform 0.3s, box-shadow 0.3s;
                    width: 200px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .department-button img {
                    width: 70px;
                    height: 70px;
                    margin-bottom: 10px;
                }
                .department-button:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
                    background-color: #005f73;
                    color:white;
                }
            </style>
        </head>
        <body>
            <h1>Select Department</h1>
            <!--Cardiology Department-->
            <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Cardiology')">
                <img src=${cardiology} alt="Cardiology Icon">
                Cardiology
            </button>
               <div id="Cardiology-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

         <!--Neurology Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Neurology')">
                <img src=${neurology} alt="Neurology Icon">
                Neurology
            </button>
             <div id="Neurology-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>
            
            <!--Pediatrics Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Pediatrics')">
                <img src=${pediatrics} alt="Pediatrics Icon">
                Pediatrics
            </button>
             <div id="Pediatrics-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

             <!--Radiology Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Radiology')">
                <img src=${radiology} alt="Radiology Icon">
                Radiology
            </button>
             <div id="Radiology-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

            <!--Emergency Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Emergency Department')">
                <img src=${emergency} alt="Emergency Department Icon">
                Emergency Medicine
            </button>
             <div id="Emergency-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

            <!--Geriatrics Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Geriatrics')">
                <img src=${geriatrics} alt="Geriatrics Icon">
                Geriatrics
            </button>
             <div id="Geriatrics-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

            <!--Gynaecology Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Gynaecology')">
                <img src=${gynaecology} alt="Gynaecology Icon">
                Gynaecology
            </button>
             <div id="Gynaecology-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>

            <!--Opthalmology Department-->
             <div class="department-container">
            <button class="department-button" onclick="alert('Transferred to Ophthalmology')">
                <img src=${opthalmology} alt="Ophthalmology Icon">
                Ophthalmology
            </button>
             <div id="Opthalmology-doctors" style="display: none;">
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Smith')">Dr. Smith - 5 Patients</button>
                        <button class="doctor-button" onclick="alert('Transferred to Dr. Lee')">Dr. Lee - 3 Patients</button>
                    </div>
                </div>
            </div>
            
            
        </body>
        </html>
  `);
  newWindow.document.close();
};



// end of transfer function
  return (
    <div className="full-section-form">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
      </header>
      <div className="main-content">
        {/* Left Side: Form */}
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="middle_name">Middle Name</label>
              <input type="text" id="middle_name" name="middleName" value={formData.middleName} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="place_of_birth">Place of Birth</label>
              <input type="text" id="place_of_birth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="civil_status">Civil Status</label>
              <input type="text" id="civil_status" name="civilStatus" value={formData.civilStatus} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="religion">Religion</label>
              <input type="text" id="religion" name="religion" value={formData.religion} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="home_address">Home Address</label>
              <input type="text" id="home_address" name="homeAddress" value={formData.homeAddress} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="province">Province/Region</label>
              <input type="text" id="province" name="province" value={formData.province} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City/Municipality</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="barangay">Barangay</label>
              <input type="text" id="barangay" name="barangay" value={formData.barangay} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
            </div>
          </div>
        </div>

        {/* Right Side: Personal Information */}
        <div className="info-section">
          <h2>PERSONAL INFORMATION</h2>
          <div className="profile">
            <div className="profile-img">
              <img src={ppf} alt="Patient Profile" />
            </div>
            <div className="profile-text">
              <p><strong>Patient Name</strong></p>
              <p>ID Number</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Toggle Button */}
      <div className="form-buttons">
   
    <button onClick={goToDashboard} className="dashboard-button">
      <img src={returnIcon} alt="Return Icon" className="return-icon" /> Dashboard
    </button>

        {/* If the dashboard is visible, show it */}
        {isDashboardVisible && (
          <div className="dashboard-content">
            <h3>Dashboard Content</h3>
            <p>Here you can add the actual dashboard information...</p>
          </div>
        )}

        <div className="right-buttons">
          <button type="submit" className="btn" onClick={handleSubmit}>SAVE</button>
          <button type="button" className="btn" onClick={handlePrint}>PRINT</button>
          <button type="button" className="btn" onClick={handleTransfer}>TRANSFER</button>
        </div>
      </div>

      <footer className="footer">
        <img src={footerImage} alt="Footer Background" className="footer-image" />
      </footer>
    </div>
  );
};

export default PatientInfo;
