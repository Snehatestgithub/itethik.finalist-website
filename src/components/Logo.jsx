import React from 'react';
const Logo = ({ className = "", imageClassName = "h-14 md:h-16" }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="ITETHIK"
        className={`${imageClassName} w-auto object-contain transition-all duration-300`}
      />
    </div>
  )
}

export default Logo;
