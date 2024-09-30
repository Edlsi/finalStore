import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal'; // Import the modal component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to open the modal
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <Router>
      <div className="bg-neutral-800 min-h-screen text-white">
        {/* Pass the openModal function to Navbar */}
        <Navbar openModal={openModal} />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/games/:gameName" element={<Games />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PaymentPage />} />
          </Routes>
        </div>

        {/* Pass the openModal function to Footer */}
        <Footer openModal={openModal} />

        {/* Render the modal and pass the closeModal function */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
