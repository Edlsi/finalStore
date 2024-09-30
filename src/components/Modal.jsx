import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold">
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Default export here
export default Modal;
