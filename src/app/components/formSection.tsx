"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interests: string[];
  agreeToTerms: boolean;
}

const Form = ({ formRef }: { formRef: React.RefObject<HTMLDivElement> }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    interests: [],
    agreeToTerms: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

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
        setFormSubmitted(true);
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

  return (
    <div
      ref={formRef}
      className="relative w-full py-8 sm:py-12 lg:py-20 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-32"
    >
      {!formSubmitted && (
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-textSecondary text-center mb-8 sm:mb-8">
          Ready to unlock passive income on your BTC?
        </h1>
      )}

      <div className="p-6 w-full max-w-md sm:max-w-3xl bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200 rounded-none sm:rounded-xl sm:rounded-tl-[0px] sm:rounded-tr-[120px] sm:rounded-bl-[120px] sm:rounded-br-[0px] transition-all duration-300 ease-in-out hover:shadow-2xl">
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">You are on the waitlist</h2>
            <p className="text-md sm:text-lg text-gray-400">More news soon!</p>
          </div>
        ) : (
          <>
            <p className="text-center mb-6 text-textPrimary/70 text-lg sm:text-2xl">
              Join Lever's waitlist
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corralPrimary focus:border-corralPrimary"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corralPrimary focus:border-corralPrimary"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corralPrimary focus:border-corralPrimary"
                  required
                />
              </div>

              <div className="mb-4">
                <p className="mb-2 text-sm font-medium text-gray-700">Which yield opportunities interest you?</p>
                <div className="space-y-2">
                  {[
                    "Tokenized AI GPUs",
                    "Private Credit",
                    "Real Estate",
                    "Film and media",
                    "I have a new asset to issue"
                  ].map((interest) => (
                    <label key={interest} className="flex items-center text-gray-700 text-sm">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="peer appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-corralPrimary checked:border-corralPrimary focus:outline-none transition-all"
                      />
                      <span className="ml-2 peer-checked:text-corralPrimary">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  className="bg-corralPrimary hover:bg-corralPrimary/90 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-all"
                  disabled={!formData.agreeToTerms}
                >
                  Submit
                </button>
              </div>

              <p className="text-center text-gray-500 text-xs sm:text-sm">
                I agree to receive updates on my waitlist status and other communications from Lever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
