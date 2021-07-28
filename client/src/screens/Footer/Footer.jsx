import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3">
        <p>Contact</p>
        <p>Products</p>
        <p>Websites</p>
        <a
          className="flex flex-row justify-center"
          href="https://www.linkedin.com/in/arya-bayati-b009b520a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="20" />
          <a href="https://github.com/AryByt" target="_blank" rel="noreferrer">
            <FaGithub size="20" />
          </a>
        </a>

        <p>Vinyl</p>
        <p>Sources</p>
      </div>
      <div>
        <img className=" h-14 flex object-cover" src={logo} alt="logo" />
      </div>

      <p className="text-xs font-light text-gray-50">Terms|Privacy</p>
      <p className="text-xs font-light text-gray-50">
        Copyright © 2021 Vinly | Designed developed by Arya
      </p>
    </div>
  );
}
