import React from 'react';

/**
 * Brand Promise Component
 * Displays the brand tagline in a styled badge
 * 
 * @param {string} className - Additional CSS classes
 * @param {string} text - Promise text to display
 */
const HeroBrandPromise = ({ 
  className = "", 
  text = "Tu mesa, nuestra historia" 
}) => (
  <div className={`mb-6 ${className}`}>
    <span className="inline-block bg-primary-700 text-neutral-50 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
      {text}
    </span>
  </div>
);

export default HeroBrandPromise;