import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import DeliveryDetails from './pages/DeliveryDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/delivery/:id" element={<DeliveryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
