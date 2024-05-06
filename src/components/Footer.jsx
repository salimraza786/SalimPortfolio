/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook size={24} className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/home" target="_blank">
                  <FaTwitter size={24} className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/salimrazarazs/?hl=en" target="_blank">
                  <FaInstagram size={24} className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <FaLinkedin size={24} className="text-2xl cursor-pointer" />
                </a>
              </li>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️❤️❤️ Salim Raza</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
