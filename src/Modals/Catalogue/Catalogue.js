// ProductModal.js

import React from 'react';
import './Catalogue.css'; // Create this CSS file for styling

const Catalogue = ({ product, onClose }) => {
  return (
    <div className="product-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {/* Add content for your modal here, using the 'product' prop */}
        <h2>Name</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Catalogue;
