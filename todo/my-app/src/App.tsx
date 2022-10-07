import React from 'react';
import './App.css';
import Router from './router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
