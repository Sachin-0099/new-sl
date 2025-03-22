import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/Api";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(null); // Stores user data after signup

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstname.trim()) newErrors.firstname = "First Name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (!validatePassword(formData.password))
      newErrors.password = "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const userDataObject = {
      email: formData.email.trim(),
      firstname: formData.firstname.trim(),
      lastname: formData.lastname.trim(),
      username: formData.username.trim(),
      password: formData.password.trim(),
    };

    try {
      const response = await axios.post(`${API_URL}/api/user/signup`, userDataObject, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status) {
        setUserData(response.data.data); // Store user data dynamically
        console.log("Signup successful:", response.data);
        alert("Signup successful!");
        navigate("/");
        setFormData({
          email: "",
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          confirmPassword: "",
          agree: false,
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
          {["firstname", "lastname", "username", "email"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          {/* Password Fields */}
          {["password", "confirmPassword"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                {field === "password" ? "Password" : "Confirm Password"}
              </label>
              <input
                type="password"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          {/* Agree to Terms */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Display User Data after Signup */}
        {userData && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
            <h3 className="text-lg font-semibold text-green-700">Signup Successful!</h3>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Username:</strong> {userData.username}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;