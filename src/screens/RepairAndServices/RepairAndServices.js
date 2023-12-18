import React, { useState } from 'react';
import './RepairAndServices.css';
import Header from '../../Components/Header/Header';

const RepairForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Picture:', picture);
    console.log('Description:', description);
  };

  return (
    <form className="repair-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Phone Number:</label>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

      <label>Picture:</label>
      <input type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <button type="submit">Submit Request</button>
    </form>
  );
};

const RepairAndServices = () => {
  return (
    <div className="app-container">
        <Header />
      <h1 style={{ color: 'blue', paddingTop: "80px" }}>Repair/Service</h1>
      <p style={{color: "white"}}>Our team is here to help you with your repairs. 
        Please fill out the form below to submit your request, and our agent will be addressed to your location immediately.</p>

      <RepairForm />
    </div>
  );
};

export default RepairAndServices;
