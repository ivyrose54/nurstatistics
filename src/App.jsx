import React from 'react'; // Corrected import for React
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing"; // Adjust the path as needed
import Login from "./components/Login"; // Your login component
import PatientInfo from './components/PatientInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patientinfo" element={<PatientInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
