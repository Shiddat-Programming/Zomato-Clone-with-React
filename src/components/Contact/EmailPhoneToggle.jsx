
import React, { useState } from "react";

const EmailPhoneToggle = () => {
  const [selectedOption, setSelectedOption] = useState("email");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Contact Option</h2>
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="contact"
            value="email"
            checked={selectedOption === "email"}
            onChange={() => setSelectedOption("email")}
            className="form-radio"
          />
          <span>Email</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="contact"
            value="phone"
            checked={selectedOption === "phone"}
            onChange={() => setSelectedOption("phone")}
            className="form-radio"
          />
          <span>Phone</span>
        </label>
      </div>
      {selectedOption === "email" ? (
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ) : null}
      {selectedOption === "phone" ? (
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ) : null}
    </div>
  );
};

export default EmailPhoneToggle;
