import Navbar from './components/Navbar';
import AppRoutes from './routes';
import React from 'react';
import './pages/Home';
import './pages/Login'; 
import './pages/Register';
function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;