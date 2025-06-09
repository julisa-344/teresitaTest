import React from 'react';

/**
 * Quality Indicators Component
 * Shows brand quality attributes with animated dots
 * 
 * @param {string} className - Additional CSS classes
 * @param {Array} indicators - Array of indicator objects
 */
const QualityIndicators = ({ 
  className = "",
  indicators = [
    { text: "100% Natural", color: "bg-green-400" },
    { text: "Tradición Familiar", color: "bg-orange-400" },
    { text: "Sabor Auténtico", color: "bg-red-400" }
  ]
}) => (
  <div className={`flex flex-wrap gap-6 text-sm ${className}`}>
    {indicators.map((indicator, index) => (
      <div key={index} className="flex items-center gap-2 text-white/90">
        <div className={`w-3 h-3 ${indicator.color} rounded-full animate-pulse`}></div>
        <span>{indicator.text}</span>
      </div>
    ))}
  </div>
);

export default QualityIndicators;