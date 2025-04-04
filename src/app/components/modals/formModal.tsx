import React from "react";

interface FormModalProps {
  loading: boolean;
  status: number | null;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ loading, status, onClose }) => {
  // Render a loading state when the API is still processing
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="p-6 bg-white rounded shadow">
          <p className="text-lg font-medium">Submitting your form...</p>
        </div>
      </div>
    );
  }

  // Only render if we have a status (i.e. API has responded) and we're not loading
  if (status === 200) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="p-6 bg-white rounded shadow">
          <p className="text-lg font-medium text-green-600">
            Success! You are now on the waitlist.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  } else if (status && status !== 200) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="p-6 bg-white rounded shadow">
          <p className="text-lg font-medium text-red-600">
            There was an error submitting the form.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default FormModal;
