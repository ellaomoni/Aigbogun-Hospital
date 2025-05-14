import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-8 px-4 border-t border-gray-200 w-full ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Hospital Name */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Link to="/">
              <img 
                src= {Logo}
                alt="Hospital Logo" 
                className="h-10 w-30 mr-2"
              />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              Providing quality healthcare services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-green-600"><Link to="/">Home</Link></li>
              <li className="text-gray-600 hover:text-green-600"><Link to="/about">About us</Link></li>
              <li className="text-gray-600 hover:text-green-600"><Link to="/gallery">Gallery</Link></li>
              <li className="text-gray-600 hover:text-green-600"><Link to="/department">Departments</Link></li>
              <li className="text-gray-600 hover:text-green-600"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Contact Us</h3>
            <address className="text-gray-600 not-italic space-y-2">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <p>123 Aigbogun Hospital Drive, Health City, HC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <p>Emergency: (123) 456-7891</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <p>info@Aigbogun.com</p>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Date */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} AIGBOGUN HOSPITAL. All rights reserved.</p>
          <p className="mt-1">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;