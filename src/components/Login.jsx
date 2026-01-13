import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth methods
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../css/login.css"; // Import your CSS file
import { auth, db } from "../firebaseConfig"; // Import Firebase configuration
import nurstatistic from "../img/nurstatistics.png"; // Import your logo

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for buttons
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate(); // Used for navigation after login

  // Handle input changes for registration form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle input changes for login form
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Registration submit handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, department, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    setLoading(true); // Start loading animation
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details in Firestore
      await setDoc(doc(db, "SignInUser", user.uid), {
        firstName: firstName || "N/A",
        lastName: lastName || "N/A",
        username: username || "N/A",
        department: department || "N/A",
        email,
        createdAt: new Date().toISOString(),
      });

      alert("Registration successful!");
      setIsRegistering(false); // Switch back to login form
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  // Login submit handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    setLoading(true); // Start loading animation
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Invalid email or password.");
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="account-page">
      <div className="account-container">
        {isRegistering ? (
          <div className="form-container">
            <h2>Create Account</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username_reg">Username</label>
                <input
                  type="text"
                  id="username_reg"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department_reg">Department</label>
                <input
                  type="text"
                  id="department_reg"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password_reg">Password</label>
                <input
                  type="password"
                  id="password_reg"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            <button onClick={() => setIsRegistering(false)} className="back-to-login-button">
              Back to Login
            </button>
          </div>
        ) : (
          <div className="form-container">
            <img src={nurstatistic} alt="Nurstatistics Logo" className="logo" />
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="email_login">Email</label>
              <input
                type="email"
                id="email_login"
                name="email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                placeholder="Enter email"
                required
              />
              <label htmlFor="password_login">Password</label>
              <input
                type="password"
                id="password_login"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                placeholder="Enter password"
                required
              />
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="button-container">
              <button onClick={() => setIsRegistering(true)} className="register-button">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
