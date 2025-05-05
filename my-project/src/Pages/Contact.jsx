import DefaultLayout from "../Layout/DefaultLayout";
import BackgroundImage from "../assets/ContactFormImage.webp";
import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <DefaultLayout>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center "
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold text-white relative z-10">Contact Us</h1>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-green-600">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-300 flex items-center gap-2"
              >
                <Send size={18} />
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-full">
            <h2 className="text-3xl font-semibold mb-6 text-green-600">Our Location</h2>
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Hospital Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hospital+(Your%20Hospital%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-green-600">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Emergency Numbers */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-green-600 mb-4">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Numbers</h3>
              <p className="text-gray-600">911 - Emergency</p>
              <p className="text-gray-600">112 - Ambulance</p>
              <p className="text-gray-600">999 - Fire Department</p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-green-600 mb-4">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Medical Center Drive</p>
              <p className="text-gray-600">Healthville, HV 12345</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-green-600 mb-4">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@hospital.com</p>
              <p className="text-gray-600">support@hospital.com</p>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-green-600 mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Sun: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
