import React, { useState } from "react";

const FormPop = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interests: [],
    agreeToTerms: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "interests") {
        setFormData((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((interest: string) => interest !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormSubmitted(true); // Set success state
      } else {
        const errorData = await response.json();
        console.error("Error response from API:", errorData);
        alert(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };
  

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the form if the user clicks outside the modal content
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={handleBackdropClick} // Close modal when clicking on the backdrop
    >
      <div className="bg-[#0F0F0F] p-6 sm:p-10 rounded-xl w-full max-w-lg sm:max-w-3xl shadow-lg border border-gray-700 relative mx-4 max-h-[85vh] overflow-y-auto">
        {formSubmitted ? (
          // Success Message
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              We are excited to usher in DeFi’s real world transformation.
            </h2>
            <p className="text-md sm:text-lg text-gray-400">
              More news soon!
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm sm:text-lg font-medium transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          // Form
          <>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 text-white">Get Started</h2>
            <p className="text-center mb-8 text-gray-400 text-sm sm:text-lg">
              Be one of the first to access Lever
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-400">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#1A1A1A] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-400">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#1A1A1A] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1A1A1A] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              {/* Interest Checkboxes */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-gray-400">What interests you?</p>
                <div className="space-y-2">
                  {[
                    "Access real world yield",
                    "Issue an asset",
                    "Partner with Lever",
                    "Work with Lever",
                  ].map((interest) => (
                    <label key={interest} className="flex items-center text-gray-400">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-600 bg-[#1A1A1A] focus:ring-primary"
                      />
                      <span className="ml-2">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mb-6 text-center text-gray-400 text-sm">
                I agree to receive updates on my waitlist status and other communications from Lever.
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-sm sm:text-lg font-medium transition-all"
                  disabled={!formData.agreeToTerms}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FormPop;
