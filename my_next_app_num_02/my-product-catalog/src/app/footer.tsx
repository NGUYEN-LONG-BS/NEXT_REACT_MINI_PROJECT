import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        {/* Facebook Logo */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-logo.svg" alt="Facebook" className="h-8 w-8 hover:opacity-75" />
        </a>

        {/* Shopee Logo */}
        <a href="https://www.shopee.vn" target="_blank" rel="noopener noreferrer">
          <img src="/shopee-logo.svg" alt="Shopee" className="h-8 w-8 hover:opacity-75" />
        </a>

        {/* YouTube Logo */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/youtube-logo.svg" alt="YouTube" className="h-8 w-8 hover:opacity-75" />
        </a>
      </div>
      <div className="mt-4 text-center text-sm">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
