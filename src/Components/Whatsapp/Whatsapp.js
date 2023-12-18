// WhatsAppIcon.js
import React from 'react';
import "./Whatsapp.css"
import Icon from "../../Assets/whatsapp.png"
const WhatsAppIcon = () => {
   return (
      <div id="whatsapp-icon">
         <a href="https://wa.me/254743233223" target="_blank" rel="noopener noreferrer">
            <img src={Icon} alt="WhatsApp" />
         </a>
      </div>
   );
};

export default WhatsAppIcon;
