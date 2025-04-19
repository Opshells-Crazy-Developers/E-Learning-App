// auth.api.js

// Function to handle user login
export const loginUser = async (formData) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Send the form data as JSON
    });

    // Check if the response is successful
    if (!response.ok) throw new Error("Login failed, please try again.");

    // Parse and return the response data
    const data = await response.json();
    return data;
  } catch (error) {
    // Throw an error if something goes wrong
    throw new Error(error.message || "Something went wrong during login");
  }
};

// Function to handle user registration
export const registerUser = async (formData) => {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Send the form data as JSON
    });

    // Check if the response is successful
    if (!response.ok) throw new Error("Registration failed, please try again.");

    // Parse and return the response data
    const data = await response.json();
    return data;
  } catch (error) {
    // Throw an error if something goes wrong
    throw new Error(error.message || "Something went wrong during registration");
  }
};

