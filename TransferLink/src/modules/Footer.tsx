import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TransferHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
