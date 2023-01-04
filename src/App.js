import react, { useState } from 'react';
import './App.css';
import {ToastContainer,toast}from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [password ,setPassword]=useState('**********************');
  const generatePassword = () => {
    const randomPassword =
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    setPassword(randomPassword);
    navigator.clipboard.writeText(randomPassword);
  };

  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="password">{password}</div>
        <button className="generate-password" onClick={generatePassword}>Generate password</button>
      </div>
    </div>
  );
}

export default App;
