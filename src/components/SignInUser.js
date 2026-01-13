import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

/**
 * Signs in a user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {function} onSuccess - Callback function on successful login.
 * @param {function} onError - Callback function on error during login.
 */
function signInUser(email, password, onSuccess, onError) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in successfully:", user.email);

      // Execute the success callback if provided
      if (onSuccess) onSuccess(user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error.message);

      // Execute the error callback if provided
      if (onError) onError(error.message);
    });
}

// Example usage
const email = "example@gmail.com";
const password = "yourpassword";

// Optional: Provide callback functions for better feedback
signInUser(
  email,
  password,
  (user) => alert(`Login successful! Welcome ${user.email}.`),
  (errorMessage) => alert(`Login failed: ${errorMessage}`)
);

export default signInUser;
