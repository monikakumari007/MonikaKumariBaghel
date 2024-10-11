import React, { useState } from "react";
import Navbar from "../Navbar";

function index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null, // For file upload
    coverLetter: "",
    skills: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Control pop-up visibility

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file upload separately
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to API)
    console.log(formData);
    // Show the "Application Submitted" pop-up
    setIsSubmitted(true);
    // Hide the pop-up after 3 seconds (optional)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-4xl bg-slate-300 p-4 rounded-sm font-serif text-center  font-extrabold mb-6">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-12">
        {/* Name */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your email address"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your phone number"
            required
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Upload Resume
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            placeholder="Write a brief cover letter"
          ></textarea>
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2 text-md font-medium text-white">
            Key Skills
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your key skills (comma separated)"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
